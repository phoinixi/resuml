import { type ReactNode, useId } from 'react';
import {
  DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

/**
 * Accessible vertical drag-to-reorder list.
 *
 * Pass an array of items and a `renderItem` function; the list handles
 * pointer + keyboard drag, and calls `onReorder` with the new array.
 *
 * Drag target is just the `<GripVertical>` handle — the rest of the row
 * remains clickable/editable as normal. Keyboard: Tab to a handle,
 * Space/Enter to pick up, arrow keys to move, Space/Enter to drop.
 */
export interface SortableListProps<T> {
  items: readonly T[];
  keyOf: (item: T, index: number) => string;
  onReorder: (next: T[]) => void;
  renderItem: (item: T, index: number, dragHandle: ReactNode) => ReactNode;
  /** Accessible label announced by screen readers when a drag starts. */
  ariaLabel?: string;
}

export function SortableList<T>({
  items, keyOf, onReorder, renderItem, ariaLabel = 'Reorderable list',
}: SortableListProps<T>) {
  const instanceId = useId();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const ids = items.map((it, i) => keyOf(it, i));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = ids.indexOf(String(active.id));
    const newIndex = ids.indexOf(String(over.id));
    if (oldIndex < 0 || newIndex < 0) return;
    onReorder(arrayMove([...items], oldIndex, newIndex));
  };

  return (
    <DndContext
      id={instanceId}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      accessibility={{ announcements: {
        onDragStart: ({ active }) => `Picked up item ${String(active.id)}`,
        onDragOver: () => '',
        onDragEnd: () => 'Dropped',
        onDragCancel: () => 'Move cancelled',
      }, screenReaderInstructions: { draggable: ariaLabel } }}
    >
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        {items.map((item, i) => (
          <SortableRow key={ids[i]} id={ids[i]!}>
            {(handle) => renderItem(item, i, handle)}
          </SortableRow>
        ))}
      </SortableContext>
    </DndContext>
  );
}

function SortableRow({ id, children }: { id: string; children: (handle: ReactNode) => ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    zIndex: isDragging ? 10 : undefined,
  };
  const handle = (
    <button
      type="button"
      className="form-drag-handle"
      aria-label="Drag to reorder"
      {...attributes}
      {...listeners}
    >
      <GripVertical size={14} aria-hidden="true" />
    </button>
  );
  return <div ref={setNodeRef} style={style} className={`sortable-row${isDragging ? ' dragging' : ''}`}>{children(handle)}</div>;
}
