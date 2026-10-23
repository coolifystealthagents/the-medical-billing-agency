const publishedAt = '2026-10-22';
const sources = [
  ['Medicare Claims Processing Manual', 'Centers for Medicare & Medicaid Services', 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912'],
  ['NIST SP 800-66 Revision 2', 'National Institute of Standards and Technology', 'https://csrc.nist.gov/pubs/sp/800/66/r2/final'],
  ['General Compliance Program Guidance', 'HHS Office of Inspector General', 'https://oig.hhs.gov/compliance/general-compliance-program-guidance/'],
  ['Standards for Internal Control in the Federal Government', 'U.S. Government Accountability Office', 'https://www.gao.gov/products/gao-14-704g'],
] as const;

const researchSpecs = [
  ["denial-rework-cause-review", "Denial Rework Cause Review", "Denial workflow", "A reproducible review of why denial work returns after an apparent resolution.", "reopened denial items", "initial reason, evidence, routing, later change, and final disposition", "distinguish incomplete evidence from routing error and payer changes"],
  ["posting-variance-review", "Payment Posting Variance Review", "Payment operations", "A trace-based method for posting variances and resolution evidence.", "posting variances", "remittance line, account transaction, batch control, deposit reference, variance reason, and correction", "avoid treating a balanced batch as proof that every account posting is correct"],
  ["claim-follow-up-aging-review", "Claim Follow-Up Aging Review", "Claim flow", "A cohort method for separating ordinary wait time from stalled ownership.", "open claim follow-up records", "submission, status checks, payer references, reason codes, next actions, and outcome", "compare cohorts by operational state rather than age alone"],
  ["patient-callback-reliability-review", "Patient Callback Reliability Review", "Patient accounts", "An evidence review for callback timeliness, privacy, and escalation.", "patient account callbacks", "request time, verified channel, approved scope, attempts, escalation, and resolution", "separate contact completion from resolution of a disputed question"],
  ["payer-access-recertification-review", "Payer Access Recertification Review", "Access governance", "A least-privilege review of payer portal access and removal evidence.", "payer portal identities", "user roster, role, privileges, last activity, reviewer decision, exception, and removal", "treat access review as evidence reconciliation, not an email attestation"],
] as const;

function makeResearch(spec: typeof researchSpecs[number], index: number) {
  const [slug, title, cluster, excerpt, population, fields, caution] = spec;
  const rotated = [...sources.slice(index % sources.length), ...sources.slice(0, index % sources.length)];
  return {
    slug, title, cluster, topic: title, publishedAt, sourceCount: rotated.length, excerpt,
    thumbnail: `/images/october-22/${slug}.webp`,
    keyStats: ['4 authoritative sources documented', '5 control dimensions evaluated', 'One reproducible sampling protocol'],
    sections: [
      ['Research question', `This brief asks whether ${population} preserve enough evidence to reconstruct ownership, timing, decision boundaries, and completion. It evaluates workflow reliability, not clinical correctness or the legal sufficiency of any individual action.`],
      ['Population and sampling frame', `Define the population of ${population} from a fixed system export and retain the query date, filters, exclusions, and record count. Draw a stratified sample across age, status, payer or channel, and assigned owner. Include recently closed work and aged open work so the review does not overrepresent easy completions.`],
      ['Evidence fields', `For each selected ${population} record, collect ${fields}. Use a written data dictionary and mark unavailable evidence as missing. Do not infer a successful handoff from a later status alone.`],
      ['Evaluation rubric', `Score ${population} across five dimensions: intake completeness, ownership clarity, exception visibility, decision routing, and completion evidence. The central caution is to ${caution}. Record reviewer disagreement and resolve it with the named methodology owner.`],
      ['Analysis plan', `Report ${population} counts and proportions with denominators, then segment findings by the prespecified strata. Show missing-data rates beside operational findings. Compare patterns descriptively unless the sample design supports a stronger inference.`],
      ['Privacy and governance', `Minimize protected and account-level information from ${population} in the analysis file. Restrict the crosswalk, record access, and apply the organization retention schedule. Route clinical, coding, contractual, compliance, refund, or legal questions to authorized professionals.`],
      ['Limitations and replication', `This method observes ${population} documentation and workflow behavior in the selected period. It does not establish causation, determine payment entitlement, interpret a contract, or validate medical coding. Retain the query, sampling seed, rubric version, and reviewer notes so the review can be repeated.`],
    ],
    sources: rotated.map(([label, publisher, url]) => ({label, publisher, url})),
  };
}

export const october22Research = researchSpecs.map(makeResearch);
