/**
 * Remote-eligibility check. A posting marked "remote" is not necessarily
 * remote *for this candidate*: "Remote, US" means remote within the US, which a
 * Zürich-based applicant generally cannot take. We only keep a remote posting
 * when the candidate's country is plausibly covered by its stated scope.
 *
 * Bias: conservative on clear exclusions (US-only, another single country,
 * another continent → drop), permissive on the unknown (a bare "Remote" with no
 * region → keep, since we can't prove ineligibility).
 */

/** Region tokens that, if present, include a candidate from the given country. */
const COUNTRY_INCLUSIVE: Record<string, RegExp> = {
  // Switzerland: European, EMEA, EEA/EFTA, DACH, or explicitly Switzerland.
  CH: /\b(switzerland|schweiz|suisse|svizzera|europe|european|emea|eea|efta|dach|cet|cest)\b/i,
};

/** Worldwide scopes that include everyone. */
const WORLDWIDE = /\b(worldwide|world\s?wide|anywhere|global|globally|international|fully remote)\b/i;

/**
 * Region tokens that EXCLUDE a candidate from the given country (only consulted
 * when no inclusive/worldwide token is present).
 */
const COUNTRY_EXCLUSIVE: Record<string, RegExp> = {
  CH: /\b(united states|u\.?s\.?a?|us[-\s]?based|us[-\s]?only|north america|americas|canada|canadian|latam|latin america|apac|asia|australia|india|united kingdom|uk[-\s]?only|brazil|mexico|nigeria|philippines)\b/i,
};

/**
 * @returns true when the candidate is plausibly eligible (or scope is unknown),
 * false only when the scope clearly excludes their country.
 */
export function isRemoteEligible(
  location: string | undefined,
  body: string | undefined,
  countryCode: string | undefined
): boolean {
  const cc = (countryCode ?? '').toUpperCase();
  const inclusive = COUNTRY_INCLUSIVE[cc];
  const exclusive = COUNTRY_EXCLUSIVE[cc];
  // No rules for this country → don't filter (can't make a confident call).
  if (!inclusive || !exclusive) return true;

  // Scope signal lives mostly in the location line; sample the body head too.
  const scope = `${location ?? ''} ${(body ?? '').slice(0, 400)}`;

  if (WORLDWIDE.test(scope)) return true;
  if (inclusive.test(scope)) return true;
  if (exclusive.test(scope)) return false;
  // Unknown scope: keep it, but the candidate should verify work authorization.
  return true;
}
