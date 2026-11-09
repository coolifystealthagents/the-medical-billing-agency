import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november9Research = [
  {
    "slug": "how-much-of-a-credit-balance-refund-queue-clears-within-thirty-days",
    "title": "How much of a credit balance refund queue clears within thirty days?",
    "cluster": "measurement",
    "topic": "credit balance refunds",
    "publishedAt": "2026-11-09",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for credit balance refunds, using one identified credit as the unit, a thirty-day decision rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-9/how-much-of-a-credit-balance-refund-queue-clears-within-thirty-days.webp",
    "heroImage": "/images/november-9/how-much-of-a-credit-balance-refund-queue-clears-within-thirty-days.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one identified credit balance on one account.",
      "A thirty-day clearance means a refund, an applied credit, or a written no-refund determination.",
      "The result describes one practice's queue, not the accuracy of any payer."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of identified credit balances are resolved within thirty days of being found. A resolved credit means the practice issued a refund, applied the credit to another account, or documented that the balance was not a true credit. The result describes one practice's refund queue during a defined window. It does not measure whether every patient or payer was satisfied with the outcome.\n\nThe scope should name the credit sources, the account types, and the date range. Include patient credits, payer overpayments, duplicate postings, and credits created by a canceled service. Exclude write-offs and adjustments that did not create a returnable balance. Write the inclusions and exclusions before the first item is reviewed so the denominator stays stable.\n\nKeep the work administrative. The review can compare payments, remittances, and contract rates, but it should not decide a clinical dispute. If a credit exists because a service was denied for a clinical reason, route that item to the denial workflow. Mixing the two questions makes the refund rate hard to interpret. The protocol measures the refund process, not the merits of the care."
      ],
      [
        "Population and unit of analysis",
        "The unit is one credit balance on one account, identified on a specific date. Record the account key, the credit source, the amount, the discovery date, and the assigned owner. If an account has several unrelated credits, count each one separately unless the written policy combines them. Combining them hides the age and source of the oldest balance.\n\nThe population is every credit that enters the queue during the window, including items later found not to be true credits. Excluding those false positives after the fact would inflate the clearance rate by shrinking the denominator. Include credits found through audit, patient complaint, and routine review. Report both the account count and the dollar value so a few large credits cannot hide a long tail.\n\nLink each unit to the original payment, the remittance, and the refund transaction. A reviewer should be able to open the source record and the decision record from the same entry. Credits without a traceable source should be marked unverifiable rather than estimated. Keep the crosswalk between the analysis key and the account in an approved system."
      ],
      [
        "Definitions and measures",
        "A cleared credit means a refund was issued and dated, the credit was applied to another account with documentation, or a reviewer determined in writing that no refund was due. An open credit means the review is still active at day thirty. A past-due credit means day thirty passed without a decision. An unverifiable credit means the source could not be confirmed.\n\nThe primary measure is the number of credits cleared on or before day thirty divided by all credits identified in the window. Show the open, past-due, and unverifiable counts beside the rate. A second measure is the dollars cleared divided by the dollars identified, because a high item count can hide small refunds. Report the median days from discovery to decision for each group.\n\nA useful companion measure is the share of reviewed credits that were not true credits at all. That number shows whether the queue is well targeted or whether the team is reviewing posting noise. Report it beside the clearance rate and explain the difference. The two measures answer related questions and should not be combined into a single score."
      ],
      [
        "Evidence standard",
        "Each unit needs the account key, the original payment date and amount, the remittance reference, the expected amount when a contract applies, and the discovery date. Record the reviewer, the decision, the decision date, and the refund date and amount when one was issued. Attach a copy of the patient or payer notice. A cleared item without a transaction reference is weak evidence.\n\nKeep the original posting separate from any adjustment so the reviewer can see what changed. If a payment was reversed, record the reversal date and the reason. If the refund method differed from the patient's request, note the request and the practice response. These details explain why an item took longer than thirty days without relying on memory.\n\nHandle patient information according to the practice privacy and security policies. Use a pseudonymous key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail the refund review does not need. The measurement should use the minimum data required to confirm the balance and the return."
      ],
      [
        "Sampling and collection",
        "Use every credit in the queue when the volume is manageable. If sampling is necessary, draw from the full queue, including items that have not yet been worked. A sample built only from reviewed items will overstate the clearance rate because it excludes the untouched backlog. Record the sampling frame, the method, and every exclusion.\n\nReconcile the queue against the accounting ledger and the accounts receivable system before analysis. Credits that appear in one record but not the other should be counted and investigated, not silently dropped. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate is useful evidence about how clear the definitions are.\n\nSave the extracts with the date and time they were pulled. If the ledger changes during collection, note the change and use the same snapshot for every item. Record batch refunds in a way that preserves the underlying account count. When a batch payment cannot be allocated, mark the group partially verifiable rather than forcing an average."
      ],
      [
        "Analysis and reporting",
        "Report the identified count, the cleared-by-thirty count, the cleared-after-thirty count, the open count, the past-due count, and the unverifiable count. Show the clearance share with its denominator, the dollars cleared, and the observation window. Add the median days to decision and the oldest open item. These numbers let a reader judge both speed and completeness.\n\nGroup the results by credit source, payer, and dollar band. One payer or one posting error may account for most of the queue, and a team-wide rate would hide that concentration. Show the group counts beside the rates so small groups are not overread. Give the billing lead a decision the data can support, such as changing a threshold, adding a reviewer, or fixing a posting rule.\n\nDo not present the share as proof of legal compliance or as an audit opinion. If one source consistently clears slowly, test one change in the next window and compare like with like. Record the change date so the before and after periods are distinct. A small documented change is easier to defend than a broad cleanup that touches every account."
      ],
      [
        "Limitations and use",
        "The result depends on the accuracy of the ledger and on the discovery date being real. A credit found late may clear quickly after discovery but still be old in the account. Report the origination date and the discovery date separately when both are available. Otherwise the thirty-day measure describes the queue's response, not the age of the balance.\n\nOutcome evidence can lag. A refund may be approved but not yet posted, and a payer return may arrive without a label that matches the queue. Some credits are actually patient responsibility that was posted incorrectly, which changes what a correct outcome means. These limits should travel with the number rather than appearing in a footnote.\n\nThis protocol is administrative workflow research, not a legal, coding, or compliance determination. Review the findings with the finance and compliance owners before changing a refund policy. Keep the queue, the decision log, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability honestly."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Medicare Physician Fee Schedule",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/payment/fee-schedules/physician"
      },
      {
        "label": "Standards for Internal Control in the Federal Government (Green Book)",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Claims appeals",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/claims-appeals"
      }
    ]
  },
  {
    "slug": "what-share-of-secondary-claims-pay-on-the-first-submission-after-coordination-of-benefits",
    "title": "What share of secondary claims pay on the first submission after coordination of benefits?",
    "cluster": "measurement",
    "topic": "secondary claim performance",
    "publishedAt": "2026-11-09",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for secondary claims, using one submitted claim as the unit, a first-submission payment rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-9/what-share-of-secondary-claims-pay-on-the-first-submission-after-coordination-of-benefits.webp",
    "heroImage": "/images/november-9/what-share-of-secondary-claims-pay-on-the-first-submission-after-coordination-of-benefits.webp",
    "readingMinutes": 14,
    "keyStats": [
      "The unit is one secondary claim submitted after a primary remittance.",
      "First-submission payment means no rejection, correction, or additional-information request.",
      "The result describes one practice's handoff, not a payer's overall accuracy."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of secondary claims are paid on the first submission after coordination of benefits. The purpose is to learn whether the handoff from the primary remittance to the secondary payer is clean or whether it creates rework. A first-submission payment means the secondary payer paid the claim without a rejection, a correction, or a request for more information. The result describes one practice's claims during a defined window.\n\nThe scope should name the secondary payers, the service lines, the primary plan types, and the date range. Include commercial secondary plans, Medicare supplemental plans, and Medicaid when it pays after another payer. Exclude claims with no secondary coverage and balances that are entirely patient responsibility. Write these decisions down before the first claim is classified.\n\nThe analysis stays administrative. It can compare the primary remittance, the secondary claim, and the secondary payment, but it should not decide whether a service was clinically appropriate. If the primary denied for a clinical reason and the secondary is reviewing the same question, route the item to the denial workflow. The secondary protocol measures the handoff, not the merits of the denial."
      ],
      [
        "Population and unit of analysis",
        "The unit is one secondary claim identified by the claim identifier, the secondary payer, the date submitted, and the primary remittance date. Count each claim once, even when it contains several lines, unless the team decides in advance to review at the line level. A claim-level unit matches how the payer responds and how the team tracks the work. Write the choice down so it does not change by payer.\n\nThe population is every claim that entered the secondary queue during the window, including claims that were never submitted. Excluding the unsubmitted claims would overstate performance because the hardest handoffs often stall before submission. Include resubmitted claims only when the first submission was rejected and the resubmission is the correction being studied. Report the submitted count and the never-submitted count beside the rate.\n\nLink each unit to the primary remittance, the coverage order record, and the secondary claim. A reviewer should be able to open all three from one entry. Claims without a traceable primary determination should be marked unverifiable rather than estimated. Keep the analysis key separate from the patient identifier."
      ],
      [
        "Definitions and measures",
        "A first-submission payment means the secondary payer paid at least part of the claim on the first submission with no rejection, no corrected claim, and no request for additional information. A clean denial means the payer denied for a reason the practice accepts, such as patient responsibility or a non-covered service. A rework item means the claim required a correction, a new attachment, or a resubmission before any payment decision. Write these categories down before the first claim is reviewed so a coder does not invent a rule midstream.\n\nThe primary measure is the number of first-submission payments divided by all claims submitted in the window. Show the rework count, the clean-denial count, and the still-open count beside it. A second measure is the dollars paid on first submission divided by the dollars submitted, because a high claim count can hide small payments. Report the median days from submission to payment.\n\nA useful companion measure is the share of rework caused by a missing primary remittance or a wrong coverage order. That number points to the handoff step rather than to the payer. Report it beside the first-submission rate. The two numbers answer different questions and should not be collapsed into one performance score."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim identifier, the patient key, the primary payer and payment date, the secondary payer, the coverage order and its confirmation date, the submission date, and the attachments sent. Record the clearinghouse acceptance, the payer acknowledgment, and the secondary remittance. A paid claim without a remittance reference is weak evidence. Keep the reference beside the unit so a later reviewer can reopen the same record.\n\nKeep the primary allowed amount and paid amount with the claim. If the secondary payer required a denial letter, save the letter and the date it was sent. If the coverage order changed during the window, record the change and the source. These details separate a handoff error from a payer rule that the practice could not control.\n\nHandle protected health information according to the practice policies. Use a pseudonymous claim key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical records that the payment comparison does not need. The measurement should use the minimum data required to explain the payment decision."
      ],
      [
        "Sampling and collection",
        "Use every claim in the secondary queue when the volume allows. If sampling is necessary, draw from the full queue, including claims that were never submitted. Record the sampling frame, the method, and the exclusions. A sample that includes only submitted claims will miss the stall that matters most to the patient and the practice.\n\nReconcile the secondary queue against the clearinghouse report and the accounts receivable system. Claims that appear in one record but not the other should be counted and investigated. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate is useful evidence about whether the definitions are clear enough to repeat.\n\nSave the extracts with the pull date and time. If the payer changes a status during collection, note the change and keep the original status for the window. Record batch submissions in a way that preserves the claim count. When a payer responds to a batch with one payment, allocate the payment using the payer detail rather than an average."
      ],
      [
        "Analysis and reporting",
        "Report the submitted count, the first-submission payments, the clean denials, the rework count, and the open count. Show the first-submission share with its denominator and the dollars paid on first submission. Add the median days to payment and the most common rework reason. These numbers let a reader see both speed and quality.\n\nGroup the results by secondary payer, primary plan type, and service line. One payer or one missing attachment may account for most of the rework, and a team-wide rate would hide that concentration. Show the group counts beside the rates so small groups are not overread. Give the billing lead a decision the data can support, such as a checklist change or a payer call.\n\nDo not present the share as proof that a payer is acting in bad faith. If one cause dominates, test one change in the next window and compare like with like. Record the change date so the before and after periods are distinct. The goal is a cleaner handoff, not a perfect-looking chart."
      ],
      [
        "Limitations and use",
        "The result depends on the quality of the primary remittance and the coverage order record. A practice with better documentation may show a higher first-submission rate because the evidence is easier to assemble. A payer may also change its edit rules during the window, which affects the outcome without any change in team performance. These limits should travel with the number.\n\nSome secondary claims are correctly denied because the patient is responsible for the balance, and those denials should not be treated as failures. Others are paid after a long review even though the first submission was clean. Report the clean denials separately from the rework items so the reader can tell the difference. The repeat-contact pattern is the better signal that a resolution failed.\n\nThis protocol is administrative workflow research, not a legal or compliance determination. Review the findings with the billing lead and the contracting owner before changing a submission rule. Keep the queue, the remittance file, and the analysis together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise rate."
      ]
    ],
    "sources": [
      {
        "label": "Coordination of benefits employer services",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coordination-benefits-recovery/employer-services"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "National Correct Coding Initiative edits",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      },
      {
        "label": "Claims appeals",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/claims-appeals"
      }
    ]
  },
  {
    "slug": "how-often-does-a-prior-authorization-follow-up-change-the-scheduled-service",
    "title": "How often does a prior authorization follow-up change the scheduled service?",
    "cluster": "measurement",
    "topic": "prior authorization follow-up",
    "publishedAt": "2026-11-09",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for prior authorization follow-up, using one open request as the unit and a documented schedule change as the outcome.",
    "thumbnail": "/images/november-9/how-often-does-a-prior-authorization-follow-up-change-the-scheduled-service.webp",
    "heroImage": "/images/november-9/how-often-does-a-prior-authorization-follow-up-change-the-scheduled-service.webp",
    "readingMinutes": 14,
    "keyStats": [
      "The unit is one open authorization request with a scheduled service date.",
      "A change means the date, service, site, or status of the appointment moved after follow-up.",
      "The result describes one practice's follow-up routine, not payer turnaround overall."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a documented prior authorization follow-up changes the scheduled service. The question is practical: does the call produce information that scheduling can act on, or does it only add a note to the file? A change includes a moved date, a changed service, a changed site, or a cancellation that follows the authorization status. The result describes one practice's requests during a defined window.\n\nThe scope should name the payers, the service types, the scheduling locations, and the date range. Include requests that were approved, denied, and still pending at the service date. Exclude requests that were withdrawn before the first follow-up and services that never had a scheduled date. Write the inclusions before the first request is classified so the denominator is stable.\n\nThe analysis is administrative. It can compare the request log, the call record, and the schedule, but it should not judge whether a denial was clinically correct. If a clinician changes the service for a clinical reason, record that reason separately from an authorization change. The protocol measures the follow-up's effect on scheduling, not the quality of the clinical decision."
      ],
      [
        "Population and unit of analysis",
        "The unit is one authorization request with a scheduled service date, identified by the request number, the payer, the service code, and the original appointment date. Count each request once, even when the follow-up takes several calls. If one request covers several services, record the primary service and note the others. The unit should match the thing scheduling actually moves.\n\nThe population is every request that had at least one documented follow-up before the service date. Include requests that were eventually canceled, because a cancellation after follow-up is an outcome the team needs to see. Exclude requests with no scheduled service, since there is nothing to change. Report the request count and the service count beside the rate.\n\nLink each unit to the request log, the follow-up call note, and the schedule snapshot before and after the call. A reviewer should be able to see what scheduling knew at each point. Requests without a schedule reference should be marked unverifiable rather than inferred. Keep the analysis key separate from the patient identifier."
      ],
      [
        "Definitions and measures",
        "A schedule change means the appointment date, the service, the site, or the status moved after the follow-up and before the original service date. A no-change means the appointment stayed as scheduled or moved for a reason unrelated to authorization. A pending item means the follow-up produced no decision and the appointment remained at risk. Use these categories consistently.\n\nThe primary measure is the number of requests with an authorization-related schedule change divided by all followed-up requests. Show the no-change, pending, and unrelated-change counts beside it. A second measure is the share of changes that happened before the original service date, because a change after the date is a late rescue rather than a prevention. Report the median days between the follow-up and the change.\n\nA useful companion measure is the share of follow-ups that produced a specific next action, such as a document request, a peer-to-peer review, or a decision date. That number shows whether the call was useful even when the schedule did not move. Report it beside the change rate. The two measures describe different kinds of value from the same call."
      ],
      [
        "Evidence standard",
        "Each unit needs the request number, the payer, the member key, the service code, the original appointment date, and the first follow-up date. Record the call reference, the representative or portal source, the information received, and the next action. Save the schedule before and after the call, with the timestamp. A change without a timestamp is hard to attribute to the follow-up.\n\nKeep the payer decision and the date it arrived with the request. If the decision came through a portal, save the confirmation page or the message. If scheduling moved the appointment before the decision arrived, record who authorized the move and why. These details separate a change caused by the follow-up from one caused by a separate scheduling problem.\n\nHandle patient information according to the practice policies. Use a pseudonymous request key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the scheduling question does not require. The measurement should use the minimum data needed to connect the request, the call, and the appointment."
      ],
      [
        "Sampling and collection",
        "Use every followed-up request when the volume allows. If sampling is necessary, draw from the full request log rather than from the requests that produced a visible change. A sample built from changed appointments will overstate the effect because it leaves out the calls that changed nothing. Record the sampling frame, the method, and every exclusion.\n\nReconcile the request log against the scheduling system and the payer portal before analysis. Requests that appear in one record but not the other should be counted and investigated. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate is useful evidence about whether the change definition is clear.\n\nSave the extracts with the pull date and time. If an appointment changes during collection, keep the original snapshot for the window. Record the sequence of calls for each request rather than only the last one. When a request has several calls and one change, attribute the change to the call that produced the information, not to the whole series."
      ],
      [
        "Analysis and reporting",
        "Report the followed-up request count, the authorization-related changes, the unrelated changes, the pending requests, and the unverifiable count. Show the change share with its denominator and the median days from follow-up to change. Add the share of follow-ups with a specific next action. These numbers let a reader see whether the calls are producing usable information.\n\nGroup the results by payer, service type, and lead time between the request and the appointment. A short lead time may produce more changes because there is still room to move the schedule. A long lead time may produce fewer changes but more unresolved risk. Show the group counts beside the rates so small groups are not overread. The lead-time split is the part that usually explains the difference between groups.\n\nGive the billing lead a decision the data can support, such as changing the first follow-up window, adding a peer-to-peer step, or giving scheduling a daily summary. Do not present the change share as proof that follow-up is effective in every case. If one payer dominates the changes, test one process change in the next window and compare like with like. Write the decision and the change date in one line so the next review can see what was tried."
      ],
      [
        "Limitations and use",
        "The result depends on the completeness of the request log and the schedule snapshots. A practice with better documentation may show more changes simply because the changes are visible. Some appointments move for patient or clinician reasons that have nothing to do with authorization, and those must be separated. These limits should travel with the number.\n\nA follow-up can be valuable even when the schedule does not move, because it confirms approval or prevents a last-minute surprise. A change can also be a sign of a late process rather than a good one. Report both the change rate and the timing so the reader can judge which interpretation fits. Read the timing data before crediting the follow-up with a change.\n\nThis protocol is administrative workflow research, not a clinical or compliance determination. Review the findings with the scheduling lead and the billing owner before changing the follow-up policy. Keep the log, the snapshots, and the analysis together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise rate."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Administrative simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      },
      {
        "label": "National Correct Coding Initiative edits",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      },
      {
        "label": "Medicare coverage basics",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/basics/get-started-with-medicare"
      }
    ]
  },
  {
    "slug": "what-share-of-missed-charges-does-a-daily-service-comparison-find",
    "title": "What share of missed charges does a daily service comparison find?",
    "cluster": "measurement",
    "topic": "charge capture",
    "publishedAt": "2026-11-09",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for daily charge capture, using one service without a matching charge as the unit and a resolved-charge rule.",
    "thumbnail": "/images/november-9/what-share-of-missed-charges-does-a-daily-service-comparison-find.webp",
    "heroImage": "/images/november-9/what-share-of-missed-charges-does-a-daily-service-comparison-find.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one service record with no matching charge at the daily run.",
      "A recovered charge is entered and accepted before the billing deadline.",
      "The result describes one practice's comparison, not total revenue leakage."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of missed charges a daily service-to-charge comparison finds and resolves. The purpose is to learn whether the daily run is catching real gaps or only producing a list that the team learns to ignore. A finding is one service record that has no matching charge at the time of the run. A recovery is a charge entered, accepted, and linked to that service before the billing deadline.\n\nThe scope should name the service lines, the locations, the source systems, and the date range. Include clinic visits, procedures, supplies, and infusions when those are billed separately. Exclude services that are never billed, such as a non-billable screening, and say so in advance. Write the exclusions before the first run so the denominator does not move.\n\nThe work is administrative. It can compare the schedule, the encounter, the charge file, and the claim, but it should not decide whether a service was medically necessary. If a charge is missing because the documentation does not support it, route the question to the clinical or coding owner. The protocol measures charge capture, not the appropriateness of care."
      ],
      [
        "Population and unit of analysis",
        "The unit is one service record with no matching charge at the daily run, identified by the patient key, the service date, the service code or description, and the source record. Count each service once, even if it appears in several daily runs. A deduplicated unit prevents a single late charge from looking like several separate gaps. Record the first date the gap appeared.\n\nThe population is every service in the comparison window, not only the gaps. The denominator needs the total service count so the gap rate has meaning. Include services that were billed correctly, because they show the comparison is working. Report the gap count, the total service count, and the dollar value of the gaps.\n\nLink each unit to the source record, the charge file, and the final claim when one exists. A reviewer should be able to see whether the charge was entered late, entered under a different code, or never entered. Units without a clear source record should be marked unverifiable rather than assumed. Keep the analysis key separate from the patient identifier."
      ],
      [
        "Definitions and measures",
        "A recovered charge means a charge was entered and accepted for the missing service before the payer filing deadline. A lost charge means the service was supported but could not be billed in time or was determined not to be billable. A false positive means the service was already charged under another record or was not a billable service. An open item means the decision is still pending.\n\nThe primary measure is the number of recovered charges divided by all deduplicated gaps found in the window. Show the lost, false-positive, and open counts beside it. A second measure is the dollars recovered divided by the dollars of all gaps, because one large procedure can outweigh many small items. Report the median days from the run to recovery.\n\nA useful companion measure is the gap rate: the number of gaps divided by the total service count. That number shows whether the comparison is finding a small number of exceptions or a systemic capture problem. Report it beside the recovery share. A high recovery share with a high gap rate still means the upstream process needs work."
      ],
      [
        "Evidence standard",
        "Each unit needs the source record, the service date, the patient key, the provider, the expected charge, and the first run date. Record the owner, the action taken, the charge entry date, and the claim identifier when one exists. If the service was not billable, record the reason and the person who confirmed it. A recovered dollar without a linked charge is weak evidence.\n\nKeep the source extract and the charge extract from the same run time. If the charge file was partial, note that and move the run rather than counting the difference as a gap. Save the corrected claim or the late charge confirmation with the item. These details separate a true capture gap from a timing difference.\n\nHandle patient information according to the practice policies. Use a pseudonymous key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical notes that the charge review does not need. The measurement should use the minimum data required to prove the service and the charge."
      ],
      [
        "Sampling and collection",
        "Use every daily run in the window when the volume is manageable. If sampling is necessary, draw from the full set of runs rather than from the runs that produced a visible recovery. Record the sampling frame and the run dates. A sample of only successful recoveries will overstate the comparison's value.\n\nReconcile the source extract against the charge file before counting gaps. Confirm that the run used the same date and the same service population every day. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate is useful evidence about whether the definitions of recovered, lost, and false positive are clear.\n\nDeduplicate the gap list across days so a charge that stays missing is counted once, with the first appearance date. Save the extracts with the pull time. If a charge appears in the file after the run, treat it as a late charge and record the delay rather than deleting the gap. The record should show the full life of the item."
      ],
      [
        "Analysis and reporting",
        "Report the total service count, the deduplicated gap count, the recovered, lost, false-positive, and open counts, and the dollars in each group. Show the recovery share and the gap rate with their denominators. Add the median days to recovery and the oldest open gap. These numbers let a reader judge both the size of the problem and the speed of the fix.\n\nGroup the results by service line, location, provider, and day of week. One clinic or one supply may account for most of the gaps, and a team-wide rate would hide that pattern. Show the group counts beside the rates so small groups are not overread. Give the billing lead a decision the data can support, such as a template change or a daily huddle.\n\nDo not present the gap rate as total revenue leakage. The comparison only finds gaps it is designed to see, and it may miss undercoding or services outside the source. If one cause dominates, test one change in the next window and compare like with like. Record the change date so the before and after periods are distinct."
      ],
      [
        "Limitations and use",
        "The result depends on the completeness of the service source and the timing of the charge file. A source that misses add-on services will understate gaps, while a partial charge file will overstate them. A practice with a fast charge entry process may show few gaps because most charges already posted. These limits should travel with the number.\n\nA false positive is not a failure of the comparison if the review correctly closes it. Report false positives separately so the team can see whether the rules are too broad. A gap that is recovered after the filing deadline is a lost charge, not a recovery, even if the payment eventually arrives. That distinction keeps the recovery rate from rewarding work that arrived too late.\n\nThis protocol is administrative workflow research, not a coding or compliance determination. Review the findings with the billing lead and the coding owner before changing a charge rule. Keep the run files, the gap log, and the analysis together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise rate."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Physician Fee Schedule",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/payment/fee-schedules/physician"
      },
      {
        "label": "National Correct Coding Initiative edits",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Health care reports",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/health-care"
      }
    ]
  },
  {
    "slug": "how-many-patient-billing-calls-end-with-a-documented-resolution",
    "title": "How many patient billing calls end with a documented resolution?",
    "cluster": "measurement",
    "topic": "patient billing support",
    "publishedAt": "2026-11-09",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for patient billing calls, using one inbound call as the unit and a documented resolution within two business days as the outcome.",
    "thumbnail": "/images/november-9/how-many-patient-billing-calls-end-with-a-documented-resolution.webp",
    "heroImage": "/images/november-9/how-many-patient-billing-calls-end-with-a-documented-resolution.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one inbound patient billing call.",
      "A resolution is a payment, plan, correction, refund, or owned escalation with a date.",
      "The result describes one practice's phone support, not patient satisfaction overall."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how many inbound patient billing calls end with a documented resolution. The purpose is to learn whether the call center closes the patient's issue or simply closes the call. A resolution means a payment was taken, a payment plan was set, a statement was corrected, a refund was started, or a review was escalated with an owner and a response date. The result describes one practice's calls during a defined window.\n\nThe scope should name the phone lines, the shifts, the account types, and the date range. Include calls about statements, balances, payments, refunds, and insurance questions when those are handled by the billing team. Exclude calls that are purely clinical or scheduling unless they also involve a billing issue. Write the exclusions before the first call is classified.\n\nThe work is administrative. The review can compare the call note, the account, and the payment record, but it should not judge whether a charge was clinically appropriate. If the patient disputes the care itself, route the call to the clinical or patient relations owner. The protocol measures the billing support process, not the merits of the charge."
      ],
      [
        "Population and unit of analysis",
        "The unit is one inbound patient billing call, identified by the call record, the account key, the call date and time, and the agent. Count each call once, even when the patient calls about several accounts. If one call covers two separate issues, record the primary issue and note the second. The unit should match the thing the phone system and the account note can both identify.\n\nThe population is every inbound billing call that reaches the team during the window, including calls that end without a resolution. Excluding unresolved calls after the fact would inflate the rate by shrinking the denominator. Include calls that were transferred, abandoned, or disconnected after reaching an agent. Report the total call count and the unique patient count beside the rate.\n\nLink each unit to the call note, the account, and the action taken. A reviewer should be able to see what the patient asked for, what the agent promised, and what happened next. Calls without a usable note should be marked undocumented rather than assumed resolved. Keep the analysis key separate from the patient identifier."
      ],
      [
        "Definitions and measures",
        "A documented resolution means the account note states the outcome and the next step, and the outcome falls into an approved category. A payment, a plan, a corrected statement, a refund, and an owned escalation all count when the record shows the amount, the date, and the owner. A promise to call back without a date does not count. A transfer without a receiving owner does not count.\n\nThe primary measure is the number of calls with a documented resolution divided by all inbound billing calls. Show the unresolved, undocumented, and transferred counts beside it. A second measure is the share of resolved calls that produced a repeat contact within fourteen days, because a resolution that does not hold is not a real close. Report the median handling time for each call type.\n\nA useful companion measure is the mix of call reasons. That number shows whether the team is fixing individual accounts or whether one upstream statement or portal problem drives the volume. Report the mix beside the resolution rate. The two measures answer different questions and should not be combined into a single agent score."
      ],
      [
        "Evidence standard",
        "Each unit needs the call identifier, the account key, the call date and time, the agent, the call type, and the stated patient request. Record the resolution category, the amount when money moved, the next step, the owner, and the follow-up date. Attach the payment reference, the plan record, or the escalation note. A resolution without a record is only a claim.\n\nKeep the call note separate from the account history so the reviewer can see what was said and what was done. If the patient was sent a written summary, save the send date and channel. If the call was transferred, record the receiving team and the time. These details separate a real handoff from a call that ended because the patient gave up.\n\nHandle patient information according to the practice privacy and security policies. Use a pseudonymous key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail the billing call did not involve. The measurement should use the minimum data required to explain the call and its outcome."
      ],
      [
        "Sampling and collection",
        "Use every inbound billing call in the window when the volume is manageable. If sampling is necessary, draw across shifts and days rather than from one easy period. Record the sampling frame, the method, and every exclusion. A sample taken only from daytime calls will miss the questions that arrive after the office closes.\n\nReconcile the call list against the phone system and the account notes before analysis. Calls that appear in the phone log but not in the notes should be counted as undocumented, not dropped. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate is useful evidence about whether the resolution categories are clear.\n\nSave the extracts with the pull date and time. If a call is reclassified after coaching, keep the original classification for the window. Record repeat contacts within the same account so the team can see whether a resolution held. When a patient calls about the same issue twice, count both calls but link them in the analysis."
      ],
      [
        "Analysis and reporting",
        "Report the total call count, the documented resolutions, the unresolved calls, the undocumented calls, and the transfers without an owner. Show the resolution share with its denominator. Add the repeat-contact share within fourteen days and the median handling time by call type. These numbers let a reader judge both the paperwork and the outcome.\n\nGroup the results by call type, shift, and account status. A high share of statement questions may point to a mailing or portal problem, while a high share of refund calls may point to a slow refund queue. Show the group counts beside the rates so small groups are not overread. Give the billing lead a decision the data can support, such as a script update or a statement fix.\n\nDo not use the rate to rank individual agents without context. Call mix and account difficulty vary by shift, and a simple ranking encourages agents to avoid hard calls. If one call type dominates, test one change in the next window and compare like with like. Record the change date so the before and after periods are distinct."
      ],
      [
        "Limitations and use",
        "The result depends on the quality of the call notes and the completeness of the phone log. A practice with a strict note template may show a higher resolution rate because the evidence is easier to see. A patient may consider the issue resolved even when the note is thin, or unresolved even when every step was taken. These limits should travel with the number.\n\nA transferred call can be a good outcome if the receiving team owns it, and a documented promise can be a poor outcome if no one follows up. The measure should be read with the repeat-contact rate and a sample of notes. The sample of notes is what turns the two numbers into a usable finding. Neither number alone proves that the patient's issue was actually solved.\n\nThis protocol is administrative workflow research, not a legal or compliance determination. Review the findings with the billing lead and the patient support owner before changing a call policy. Keep the call list, the notes, and the analysis together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise rate."
      ]
    ],
    "sources": [
      {
        "label": "No Surprises Act",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/nosurprises"
      },
      {
        "label": "Claims appeals",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/claims-appeals"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health & Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "Administrative simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      }
    ]
  },
  {
    "slug": "what-share-of-modifier-edits-change-the-claim-before-release",
    "title": "What share of modifier edits change the claim before release?",
    "cluster": "measurement",
    "topic": "modifier review",
    "publishedAt": "2026-11-09",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for pre-bill modifier review, using one flagged claim line as the unit and a documented change before release as the outcome.",
    "thumbnail": "/images/november-9/what-share-of-modifier-edits-change-the-claim-before-release.webp",
    "heroImage": "/images/november-9/what-share-of-modifier-edits-change-the-claim-before-release.webp",
    "readingMinutes": 14,
    "keyStats": [
      "The unit is one claim line flagged by the pre-bill modifier review.",
      "A change means the modifier, code, documentation, or claim structure changed before release.",
      "The result describes one practice's edit set, not the accuracy of the code set overall."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of modifier edits change the claim before it is released. The purpose is to learn whether the pre-bill review catches real problems or only adds a step that coders click through. A change means the modifier or code changed, a documentation query was opened, or the claim was split, held, or corrected before release. The result describes one practice's edit set during a defined window.\n\nThe scope should name the modifiers, the service lines, the payers, and the date range. Include claims that were flagged and then released unchanged, because those are the comparison group. Exclude edits that fire after the claim is released, since they belong to a different process. Write the inclusions before the first line is classified.\n\nThe work is administrative. The review can compare the note, the code, and the final claim, but it should not decide whether a service was clinically appropriate. If the documentation does not support the service, route the question to the clinician. The protocol measures the edit's effect on the claim, not the quality of care."
      ],
      [
        "Population and unit of analysis",
        "The unit is one claim line flagged by the pre-bill modifier review, identified by the claim identifier, the line number, the original code and modifier, and the flag reason. Count each line once, even when it is flagged for several reasons. Record the primary reason and note the others. The line-level unit matches how modifiers are applied and how payers deny.\n\nThe population is every line flagged during the window, including lines that were released unchanged and lines that were overridden. Excluding overrides would overstate the review's effect and hide the cases where the team decided the flag was wrong. Include lines that were held and never released, with the final status. Report the flagged count and the released count beside the rate.\n\nLink each unit to the note excerpt, the original claim, and the final claim. A reviewer should be able to see what the coder saw and what changed. Lines without a usable note should be marked unverifiable rather than assumed correct. Keep the analysis key separate from the patient identifier."
      ],
      [
        "Definitions and measures",
        "A change means the modifier or code was corrected, a documentation query was opened and answered, or the claim was split, held, or otherwise restructured before release. A no-change means the line was released with the original code and modifier. An override means the coder released the line despite the flag with a recorded reason. An open item means the line was still under review at the close of the window.\n\nThe primary measure is the number of changed lines divided by all flagged lines. Show the no-change, override, and open counts beside it. A second measure is the share of changes that were supported by a note excerpt, because a change without documentation is a different kind of risk. Report the median time from flag to release.\n\nA useful companion measure is the post-release denial rate for the flagged lines, compared with a sample of lines that were not flagged. That number shows whether the review is targeting the right claims. Report it beside the change rate. A high change rate with no improvement in denials may mean the edits are misdirected."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim identifier, the line number, the original code and modifier, the flag reason, and the reviewer. Record the note excerpt that supports the decision, the final code and modifier, the release date, and any query sent to the clinician. Attach the final claim or the clearinghouse acceptance. A change without a saved note is hard to defend in an audit.\n\nKeep the original claim and the corrected claim separate so the reviewer can see the exact difference. If the line was split, record the new line structure and the reason. If the coder overrode the flag, record the reason and the reference. These details separate a genuine correction from a change made only to satisfy an edit.\n\nHandle patient information according to the practice policies. Use a pseudonymous key in the analysis file and keep the crosswalk in an approved system. Do not copy more clinical detail than the modifier decision requires. The measurement should use the minimum data needed to explain the code choice."
      ],
      [
        "Sampling and collection",
        "Use every flagged line in the window when the volume is manageable. If sampling is necessary, draw from the full flag list rather than from the lines that were changed. A sample of only changed lines will overstate the review's effect. Record the sampling frame, the method, and every exclusion.\n\nReconcile the flag list against the claim system and the final claim file before analysis. Lines that appear in one record but not the other should be counted and investigated. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate is useful evidence about whether the change definition is clear.\n\nSave the extracts with the pull date and time. If a line is re-reviewed after the window, keep the original decision for the analysis. Record the sequence of flag, review, and release so the timing is visible. When a line is flagged more than once, count the first flag and note the repeat in the record."
      ],
      [
        "Analysis and reporting",
        "Report the flagged count, the changed count, the no-change count, the override count, and the open count. Show the change share and the documented-change share with their denominators. Add the median time from flag to release and the post-release denial rate for the flagged sample. These numbers let a reader judge whether the review is doing useful work.\n\nGroup the results by modifier, service line, payer, and reviewer. One modifier or one service may account for most of the changes, and a team-wide rate would hide that pattern. Show the group counts beside the rates so small groups are not overread. Give the coding lead a decision the data can support, such as removing a noisy edit or adding a documentation prompt.\n\nDo not present a high change rate as proof of quality. A review that changes everything may be guessing, and a review that changes nothing may be rubber-stamping. If one pattern dominates, test one edit change in the next window and compare like with like. Record the change date so the before and after periods are distinct."
      ],
      [
        "Limitations and use",
        "The result depends on the quality of the note and the consistency of the reviewers. A practice with detailed documentation may show more supported changes because the evidence is easier to find. A payer may deny a correctly coded line for a reason unrelated to the modifier, which makes the denial measure noisy. These limits should travel with the number.\n\nA change is not always an improvement. Some changes satisfy a payer rule without making the code more accurate, and some overrides are correct because the flag is wrong. Read a sample of changes and overrides before drawing a conclusion. The measure describes activity and documentation, not correctness by itself.\n\nThis protocol is administrative workflow research, not a coding or compliance determination. Review the findings with the coding lead and the compliance owner before changing an edit rule. Keep the flag list, the final claims, and the analysis together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise rate."
      ]
    ],
    "sources": [
      {
        "label": "National Correct Coding Initiative edits",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      },
      {
        "label": "ICD-10-CM codes",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/icd-10-codes"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Medicare Physician Fee Schedule",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/payment/fee-schedules/physician"
      }
    ]
  },
  {
    "slug": "how-much-month-end-close-time-goes-to-reconciliation-exceptions",
    "title": "How much month-end close time goes to reconciliation exceptions?",
    "cluster": "measurement",
    "topic": "month-end close",
    "publishedAt": "2026-11-09",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for month-end close, using one reconciliation exception as the unit and recorded close labor as the time base.",
    "thumbnail": "/images/november-9/how-much-month-end-close-time-goes-to-reconciliation-exceptions.webp",
    "heroImage": "/images/november-9/how-much-month-end-close-time-goes-to-reconciliation-exceptions.webp",
    "readingMinutes": 14,
    "keyStats": [
      "The unit is one reconciliation exception in a month-end close.",
      "The time base is recorded close labor, not a general estimate of team capacity.",
      "The result describes one practice's close, not an industry benchmark."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how much month-end close time goes to reconciliation exceptions. The purpose is to show where the close actually slows down, rather than blaming the calendar or the team in general. A reconciliation exception is an item that does not match across two records, such as a deposit without a posting or a suspense item without an owner. The result describes one practice's close cycles during a defined period.\n\nThe scope should name the close cycles, the systems compared, and the labor categories included. Include cash, charge, adjustment, and suspense reconciliations. Exclude time spent on report design or project work that is not part of the recurring close. Write these boundaries before the first close is timed so the denominator is consistent.\n\nThe analysis is administrative. It can compare close checklists, timestamps, and exception logs, but it should not evaluate individual performance. A slow close may reflect a system problem, a missing report, or a staffing gap. The protocol measures where the time goes, not who is responsible for it."
      ],
      [
        "Population and unit of analysis",
        "The unit is one reconciliation exception, identified by the close cycle, the account or system, the exception type, the amount, and the date found. Count each exception once per close, even when it is investigated over several days. If one bank deposit creates several posting exceptions, record the deposit and the individual items separately only when the team works them separately. State the rule in advance.\n\nThe population is every exception logged during the close cycles in the window, including items resolved the same day. The time base is all recorded close labor for the same cycles, split into preparation, reconciliation, exception work, and sign-off. Without the total labor, an exception count says nothing about how much of the close it consumed. Report both the exception count and the labor hours.\n\nLink each unit to the reconciliation, the source document, the owner, and the resolution. A reviewer should be able to see when the exception was found and when it closed. Exceptions without a clear source should be marked unverifiable rather than estimated. Keep the analysis key separate from any employee identifier."
      ],
      [
        "Definitions and measures",
        "An exception is open when the two records do not agree at the close cut-off. It is resolved when the difference is explained and corrected or accepted with a documented reason. A repeat exception is the same cause appearing in a later close. A timing exception is a difference that will clear on its own in the next period. Use these categories consistently across cycles.\n\nThe primary measure is the hours spent on exception work divided by total close labor hours. Show the exception count, the resolved count, and the open count beside it. A second measure is the median hours per exception by type, because a few large items can consume more time than many small ones. Report the dollar value of the open exceptions and their age.\n\nA useful companion measure is the share of exceptions that repeat from a prior close. That number shows whether the close is fixing causes or only clearing symptoms. Report it beside the time share. A close that spends little time on exceptions but repeats the same few causes may still have a control problem."
      ],
      [
        "Evidence standard",
        "Each unit needs the close cycle, the reconciliation name, the source record, the comparison record, the amount, the date found, and the owner. Record the investigation notes, the resolution, the resolution date, and the correcting entry. If the item was accepted without correction, record the reason and the approver. A resolved exception without a correcting reference is weak evidence.\n\nKeep the time log at the task level, with a start and end time or a same-day estimate recorded by the person doing the work. Do not reconstruct the hours from memory at the end of the quarter. If a person works on several closes, split the time by cycle. These details make the time share reproducible instead of anecdotal.\n\nHandle financial and patient information according to the practice policies. Use a pseudonymous employee key in the analysis file and keep the crosswalk in an approved system. Do not include account numbers that the measurement does not need. The protocol should use the minimum data required to explain the exception and the time."
      ],
      [
        "Sampling and collection",
        "Use at least three consecutive close cycles so a single unusual month does not define the result. If more cycles are available, include them and report the period. Record the close calendar, the cut-off time, and any cycle that was reopened. A reopened close should be noted because it adds labor that the next cycle may not repeat.\n\nReconcile the exception log against the close checklist and the correcting entries before analysis. Exceptions that appear in one record but not the other should be counted and investigated. Have a second reviewer time a small sample of tasks and compare the estimate with the recorded hours. A large gap is useful evidence about how reliable the time log is.\n\nSave the time extracts with the pull date. If a team member leaves during the window, keep the recorded hours and note the gap rather than filling it with an estimate. Record the tool or report used for each reconciliation so a change in the system can be separated from a change in performance. That note matters when a new report or a system upgrade lands in the middle of the window."
      ],
      [
        "Analysis and reporting",
        "Report the total close labor hours, the exception hours, the exception count, the resolved and open counts, and the median hours per exception. Show the time share with its denominator. Add the repeat share and the dollar value of open items. These numbers let a reader see both the cost of the close and the nature of the exceptions.\n\nGroup the results by exception type, system, and close day. One bank feed or one report may account for most of the exception time, and a team-wide share would hide that concentration. Show the group counts beside the rates so small groups are not overread. Give the finance and billing leads a decision the data can support, such as automating a match or moving a cut-off.\n\nDo not present the time share as a benchmark against other practices. A small practice may spend a larger share on exceptions because it has less automation, not because its controls are worse. If one cause dominates, test one change in the next close and compare like with like. Record the change date so the before and after cycles are distinct."
      ],
      [
        "Limitations and use",
        "The result depends on the honesty and consistency of the time log. People often underestimate small interruptions and overestimate long tasks, and a busy close may not leave time to record either accurately. The exception log may also miss items that were fixed quietly before the checklist. These limits should travel with the number.\n\nA low time share is not automatically good, because a team may be ignoring exceptions to finish faster. A high time share is not automatically bad, because a careful review can prevent a larger problem later. Read the number with the open-item count, the repeat share, and a sample of resolutions before drawing a conclusion. Read the open-item list beside the share to see what the close left behind.\n\nThis protocol is administrative workflow research, not an audit or a legal determination. Review the findings with the finance owner and the compliance owner before changing a close control. Keep the time logs, the exception log, and the analysis together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise share."
      ]
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government (Green Book)",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Manage your business finances",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "Medicare Physician Fee Schedule",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/payment/fee-schedules/physician"
      }
    ]
  }
];
