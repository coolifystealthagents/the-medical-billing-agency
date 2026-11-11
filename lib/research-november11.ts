import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november11Research: ResearchPost[] = [
  {
    "slug": "what-share-of-patient-statements-are-returned-as-undeliverable",
    "title": "What share of patient statements are returned as undeliverable?",
    "cluster": "measurement",
    "topic": "patient statements",
    "publishedAt": "2026-11-11",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for returned patient statements, using one mailed statement as the unit, a postal reason code, and explicit limits for billing teams.",
    "thumbnail": "/images/november-11/what-share-of-patient-statements-are-returned-as-undeliverable.webp",
    "heroImage": "/images/november-11/what-share-of-patient-statements-are-returned-as-undeliverable.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one statement mailed to one patient address.",
      "A returned statement needs a postal reason, a mail date, and a resolved account action.",
      "The result describes one practice’s address quality, not the postal service overall."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of mailed patient statements are returned as undeliverable during a defined period. The result describes the address quality of one practice and the performance of its statement vendor. It does not measure whether patients received an electronic statement or whether they understood the balance. Those are separate questions with different evidence. Define the statement type, the mail vendor, and the review window before the first envelope is counted. Include first statements, reminders, and final notices if the practice sends them through the same process. Exclude statements handed to the patient at the front desk.\n\nThe review should state whether the practice counts a returned envelope once or once per mailing attempt. A patient who moved may generate three returns from three statement cycles, which can make the rate look worse than the number of affected patients. Report both the envelope count and the distinct patient count. That distinction helps the billing lead separate a data problem from a process that keeps re-mailing the same bad address."
      ],
      [
        "Population and unit of analysis",
        "The unit is one statement envelope mailed to one patient address on one date. Record the account number, the patient identifier, the mail date, the address used, and the vendor batch. If the same statement is re-mailed after a return, count the re-mail as a new unit and note the link to the original. The population is every statement in the vendor file for the window, including envelopes that were never returned. Excluding the successful mailings would make the denominator meaningless. Keep the vendor file and the practice ledger reconciled before analysis.\n\nReport the number of patients represented in the mailing, not only the envelope count. A small group of patients with repeated bad addresses can drive a large share of returns. Report the top ten addresses by return count separately. That view shows whether the practice has a broad registration problem or a handful of accounts that need manual correction. Do not remove those accounts from the population before the first count."
      ],
      [
        "Definitions and measures",
        "A returned statement is an envelope the postal service or the vendor marks as undeliverable for a reason such as moved, insufficient address, refused, or unknown. A delivered statement is one the vendor reports as mailed without a return. A resend is a new envelope sent after the practice corrects or attempts to correct the address. The primary measure is returned envelopes divided by all envelopes mailed in the window. Report the reason codes beside the rate, because a move and an incomplete address call for different fixes. Add a secondary measure for distinct patients with at least one return.\n\nMeasure the time from the return date to the first address correction attempt. A practice can have a low return rate and still take three weeks to act on each envelope. Report the median and the longest wait. Also report the share of returned accounts that received a corrected address from the patient rather than from an internal data guess. That share shows whether the practice is actually reaching patients or only editing records."
      ],
      [
        "Evidence standard",
        "Each unit needs the vendor mail file, the return reason, the return date, and the address used. Keep the original address and the corrected address side by side so the change can be reviewed. Record who made the correction and what source supported it, such as a patient call, a portal update, or a payer record. A corrected address without a source is a guess and should be labeled as such. Store the vendor file and the practice management note together. The reviewer should be able to trace one envelope from the print batch to the account action.\n\nUse a document index that lists the mail file, the return file, the correction log, and the reconciliation. Record the date each file was received and whether it is complete. If the vendor cannot supply a reason code, note that limitation rather than inferring a reason. The evidence standard should be the same for every statement type in the review. A mixed standard makes the rate impossible to compare across months."
      ],
      [
        "Sampling and collection",
        "Use every mailed statement when the volume is manageable. If sampling is necessary, draw from the full vendor file before any return is known, so the sample is not biased toward bad addresses. Record the sampling frame, the method, and every exclusion. Reconcile the vendor count with the practice statement report and the postage or print invoice. A batch that appears in one record but not the other should be investigated before the rate is calculated. Have a second reviewer check a small overlap sample of return classifications.\n\nIf the practice uses more than one vendor or print location, sample within each one. Report the vendor-level counts separately before combining them. A single vendor or a single batch may account for most returns because of a data feed or envelope issue. Keep the vendor name in the analysis key so the split can be reproduced. A pooled rate can hide a problem that is easy to fix once it is isolated."
      ],
      [
        "Analysis and reporting",
        "Report the mailed count, the returned count, the return rate, and the distinct patient count. Add the reason-code counts and the dollars associated with returned statements. Show the median days to correction and the share of accounts with a patient-supplied address. Group the results by month, vendor, statement type, and registration location when the group sizes are large enough to protect privacy. A clinic or a front desk team may account for most incomplete addresses. Give the reader a decision the data can support, such as changing the registration script or pausing a vendor batch.\n\nAdd a short table of the most common return reasons and the process step where each one starts. A missing apartment number may start at registration, while a move may start with an unreported patient change. The table turns the rate into a work plan for the owners of those steps. Share it with the front desk and the billing team, not only with the practice manager. Repeat the count after the fix and compare the same weeks."
      ],
      [
        "Limitations and use",
        "The measure depends on the vendor reporting returns consistently and on the practice recording the reason. A statement can be delivered to the wrong address without being returned, which this protocol will not detect. A patient who receives the statement and ignores it is not a return. The result describes address and mail quality, not patient willingness to pay. Report the vendor and the window with every rate so the number is not compared with a different process. Keep the mail file and the correction log together for another reviewer.\n\nA low return rate does not prove that patients understood the statement, and a high rate does not prove that the balance is uncollectible. Separate mail quality from collection outcomes in the conclusions. If a patient disputes the balance, use the account record rather than the return rate. This protocol is an administrative review, not a legal or compliance finding."
      ],
      [
        "Reviewer worksheet",
        "Keep a one-page worksheet for each vendor batch with the mailed count, the returned count, and the top three reasons. Add a short note for each reason and the process owner who can fix it. The worksheet should take less than an hour per batch. If it takes longer, the vendor file or the reason codes are incomplete. At the end of the review, give the registration and billing teams a short list of fixes with a deadline. Do not leave the list in the audit file without an owner. A batch reviewed and fixed before the next print run prevents the same returns from repeating."
      ]
    ],
    "sources": [
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Fair Debt Collection Practices Act guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/credit-finance/debt-collection"
      }
    ]
  },
  {
    "slug": "how-often-does-an-eligibility-recheck-change-a-high-cost-claim",
    "title": "How often does an eligibility recheck change a high-cost claim before submission?",
    "cluster": "measurement",
    "topic": "eligibility",
    "publishedAt": "2026-11-11",
    "sourceCount": 4,
    "excerpt": "A measurement protocol for eligibility rechecks on high-cost claims, using one scheduled service as the unit and a documented change as the outcome.",
    "thumbnail": "/images/november-11/how-often-does-an-eligibility-recheck-change-a-high-cost-claim.webp",
    "heroImage": "/images/november-11/how-often-does-an-eligibility-recheck-change-a-high-cost-claim.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one scheduled high-cost service that received a pre-service recheck.",
      "A change includes coverage, authorization, site, or patient responsibility.",
      "The result measures the value of the recheck, not the accuracy of the payer."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often an eligibility recheck changes something about a high-cost claim before the service is furnished. A change can be a terminated plan, a new authorization requirement, a different patient responsibility, or a site that is no longer eligible. The result describes one practice’s pre-service review, not the payer’s overall accuracy. Define the service types and the dollar threshold before the first account is reviewed. Include scheduled infusions, specialty injections, and other services the practice treats as high cost. Exclude services that were canceled before the recheck.\n\nThe review should separate a change that prevented a denial from a change that only corrected a record. Both are useful, but they answer different questions. A plan termination found before the visit is a financial save, while a corrected copay estimate is a communication improvement. Report the two categories separately so the practice can see where the recheck creates the most value. That distinction also keeps the rate from overstating the prevention effect."
      ],
      [
        "Population and unit of analysis",
        "The unit is one scheduled service with a documented recheck before the date of service. Record the patient, the provider, the service date, the drug or procedure, and the expected charge. If a service was rescheduled, use the first scheduled date for the unit and note the change. The population is every high-cost service on the trigger list during the window, including services that were canceled after the recheck. Excluding cancellations would remove some of the cases where the recheck changed the plan. Reconcile the trigger list with the scheduling report before analysis.\n\nReport the number of units by payer and by service line. A single payer or a single drug may dominate the result, which changes how the practice should read it. Keep the analysis key linked to the account but store the review file in an approved location. If one patient had several services, count each scheduled service separately and note the patient link. The unit should match the decision the recheck is meant to support."
      ],
      [
        "Definitions and measures",
        "A recheck is a documented eligibility or benefits inquiry completed after the original scheduling check and before the service date. A change is any difference between the pre-recheck record and the recheck result that affects coverage, authorization, site, or patient cost. A prevented denial is a change that would have caused a denial if it had not been found. The primary measure is units with at least one change divided by all rechecked units. Report the prevented-denial count separately. Add the dollars associated with changed units and the number of services rescheduled or canceled.\n\nMeasure the time between the recheck and the service date. A change found one day before the service may be too late to obtain an authorization, while the same change found a week earlier may be manageable. Report the median lead time and the share of changes with less than two business days of lead time. That measure shows whether the routine is timed to prevent loss or only to document it."
      ],
      [
        "Evidence standard",
        "Each unit needs the original eligibility record, the recheck response, the date and time of the recheck, and the reference number or screenshot. Record the representative or portal used and the fields that changed. Attach the prior authorization or the denial that followed when available. A change without a source document is a recollection, not evidence. Keep the recheck note in the account and the review worksheet in the audit file. The reviewer should be able to reconstruct the decision from the two records.\n\nUse a field-level comparison so the change is specific. Record the plan status, the effective date, the benefit, the authorization requirement, and the patient responsibility before and after. If a field was ambiguous, label it as ambiguous rather than forcing it into a change category. The evidence standard should be the same for every service line. A vague standard will produce a rate that cannot be repeated."
      ],
      [
        "Sampling and collection",
        "Use every triggered service when the volume is manageable. If sampling is necessary, draw from the full trigger list before any outcome is known. Record the sampling frame, the method, and the exclusions. Reconcile the trigger list with the scheduling system, the eligibility vendor, and the billing records. A service that appears in one source but not the others should be investigated. Have a second reviewer recheck a small overlap sample and compare the change classifications. A disagreement rate shows whether the definition is clear enough to repeat.\n\nIf the practice uses more than one eligibility tool, sample within each tool and report the results separately. A tool that returns stale data may account for most of the changes. Keep the tool name in the analysis key so the split can be reproduced. A pooled rate can hide a vendor problem that is easy to fix once it is isolated."
      ],
      [
        "Analysis and reporting",
        "Report the rechecked count, the changed count, the change rate, and the prevented-denial count. Add the dollars associated with changed units and the number of services rescheduled or canceled. Show the change types, such as plan termination, authorization, site, and patient responsibility. Group the results by payer, service line, and scheduling location when the group sizes are large enough to protect privacy. Give the reader a decision the data can support, such as moving the recheck earlier or adding a trigger for a specific drug. A rate without a decision is only a number.\n\nAdd a short table of the most common changes and the step where each one is found. A plan termination may be found in the eligibility response, while an authorization gap may be found in the payer portal. The table turns the rate into a work plan for the scheduling and billing teams. Share it with the owners of those steps, not only with the revenue cycle manager. Repeat the count after the fix and compare the same service types."
      ],
      [
        "Limitations and use",
        "The measure depends on the recheck being documented and on the original record being available for comparison. A recheck that was done but not saved will look like no recheck. A change may be caused by a payer data error that later corrects itself. The result describes the practice’s pre-service review, not the financial outcome of every claim. Report the window, the trigger list, and the tools with every rate. Keep the source records together for another reviewer.\n\nA high change rate does not always mean the recheck is working well, because a practice with poor initial data may find many changes. A low rate does not mean the recheck is unnecessary, because the changes it prevents may be rare but expensive. Separate the volume of changes from the value of prevented denials in the conclusions. This protocol is an administrative review, not a coding or legal opinion."
      ],
      [
        "Reviewer worksheet",
        "Keep a one-page worksheet for each rechecked service with the original fields, the recheck fields, and the change type. Add a short note for every change and the action taken before the service date. The worksheet should take less than fifteen minutes per unit. If it takes longer, the trigger list or the documentation is too broad. At the end of the review, give the scheduling and billing teams a clean list of fixes with a deadline. Do not leave the list in the audit file without an owner. A recheck that is timed and documented prevents the same denial from repeating."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Medicare Learning Network",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "what-share-of-remittances-still-arrive-as-paper-checks",
    "title": "What share of remittances still arrive as paper checks?",
    "cluster": "measurement",
    "topic": "payment enrollment",
    "publishedAt": "2026-11-11",
    "sourceCount": 4,
    "excerpt": "A measurement protocol for paper remittances, using one payer payment as the unit and a payment-method classification with clear limits.",
    "thumbnail": "/images/november-11/what-share-of-remittances-still-arrive-as-paper-checks.webp",
    "heroImage": "/images/november-11/what-share-of-remittances-still-arrive-as-paper-checks.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one payer payment received during the review window.",
      "Each payment is classified as electronic, paper check, or other with a source document.",
      "The result measures one practice’s payment mix, not the payer industry overall."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of payer remittances arrive as paper checks during a defined period. The result describes the payment mix of one practice and the state of its electronic enrollment. It does not measure how quickly paper checks are posted or whether electronic payments are correct. Those are separate questions. Define the payers, the practice locations, and the review window before the first payment is counted. Include Medicare, Medicaid, and commercial payers if they pay the practice directly. Exclude patient payments and refunds from this count.\n\nThe review should state whether a payment that arrives as a check but is deposited electronically counts as paper. The answer should be paper, because the remittance itself arrived on paper and required manual handling. Keep the payment method separate from the deposit method. That distinction prevents a practice from reporting progress that only changed the bank side of the process."
      ],
      [
        "Population and unit of analysis",
        "The unit is one payer payment received on one date, whether by check, electronic funds transfer, or another method. Record the payer, the payment date, the amount, the claim count, and the remittance source. If one check covers many claims, count it as one payment and record the claim count. The population is every payer payment in the bank and remittance records for the window. Exclude patient payments, refunds, and adjustments that are not payer remittances. Reconcile the bank statement with the remittance log before analysis.\n\nReport the number of payments and the dollar value by method. A small number of large checks can represent most of the dollars while a large number of small electronic payments represent most of the volume. Both views matter for staffing and for enrollment priorities. Keep the payer name and the method in the analysis key so the split can be reproduced. A pooled percentage can hide a payer that still sends every payment on paper."
      ],
      [
        "Definitions and measures",
        "An electronic remittance is a payment received through electronic funds transfer or another digital channel with a matching electronic remittance advice. A paper check is a physical check received by mail or courier, even if the practice deposits it by scanning. An other method includes wire transfers, virtual cards, and any channel that does not fit the first two. The primary measure is paper payments divided by all payer payments in the window. Report the same calculation by dollar value and by payer. Add the number of payers that send only paper.\n\nMeasure the posting time for each method, from the payment date to the date the payment is applied in the practice management system. Paper checks usually require manual posting and may sit in a queue. Report the median and the longest posting time for paper and electronic payments. That measure shows the operational cost of the paper share, not only its size."
      ],
      [
        "Evidence standard",
        "Each unit needs the bank record, the remittance document or file, and the posting entry. Record the payer, the date, the amount, and the method as shown in the source. A payment described from memory is not evidence. Keep the check image or the electronic remittance file with the review worksheet. If a payment was converted from paper to electronic deposit, label the original method and the deposit method separately. The reviewer should be able to trace one payment from the bank to the claim posting.\n\nUse a document index that lists the bank statement, the remittance log, the posting report, and the reconciliation. Record the date each source was received and whether it is complete. If a payer sends a paper explanation of benefits without a check, exclude it from the payment count and note it separately. A consistent evidence standard keeps the rate comparable across months."
      ],
      [
        "Sampling and collection",
        "Use every payment in the window when the volume is manageable. If sampling is necessary, draw from the full bank and remittance records before classification. Record the sampling frame, the method, and every exclusion. Reconcile the payment count with the general ledger and the bank statement. A payment that appears in one record but not the other should be investigated before the rate is calculated. Have a second reviewer classify a small overlap sample and compare the results.\n\nIf the practice has multiple locations or bank accounts, sample within each one and report the results separately. A single location may still receive paper checks because its enrollment was never completed. Keep the location in the analysis key so the split can be reproduced. A pooled rate can hide a site-specific problem that is easy to fix once it is isolated."
      ],
      [
        "Analysis and reporting",
        "Report the payment count, the paper count, the paper share, and the dollar share for each method. Add the number of payers that send only paper and the median posting time by method. Show the results by payer and by location when the group sizes are large enough to protect privacy. Give the reader a decision the data can support, such as prioritizing enrollment for the payers with the highest paper dollar value. A rate without a decision is only a number.\n\nAdd a short table of the payers with paper payments and the enrollment status for each one. The table turns the rate into a work plan for the enrollment owner. Share it with the billing and finance teams, not only with the revenue cycle manager. Repeat the count after an enrollment change and compare the same payers. The goal is a lower paper share without disrupting the payments that already work."
      ],
      [
        "Limitations and use",
        "The measure depends on the bank and remittance records being complete and on the method being labeled consistently. A payment can arrive electronically but require manual posting because the remittance file is missing, which this protocol will not detect. A paper check can clear quickly if the practice has a good posting routine. The result describes the payment mix, not the quality of the posting process. Report the window and the payers with every rate. Keep the source records together for another reviewer.\n\nA low paper share does not prove that enrollment is complete, and a high share does not prove that the practice is inefficient. Separate the payment method from the posting outcome in the conclusions. If a payer payment is missing, use the bank and remittance records rather than the rate. This protocol is an administrative review, not a financial audit opinion."
      ],
      [
        "Reviewer worksheet",
        "Keep a one-page worksheet for each payer with the payment count, the paper count, and the enrollment status. Add a short note for each paper payer and the next enrollment step. The worksheet should take less than an hour per payer group. If it takes longer, the bank or remittance records are incomplete. At the end of the review, give the enrollment owner a short list of payers to prioritize with a deadline. Do not leave the list in the audit file without an owner. A payer enrolled before the next payment cycle prevents the same paper handling from repeating."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  },
  {
    "slug": "how-long-do-coding-queries-stay-open-before-a-claim-is-released",
    "title": "How long do coding queries stay open before a claim is released?",
    "cluster": "measurement",
    "topic": "coding support",
    "publishedAt": "2026-11-11",
    "sourceCount": 4,
    "excerpt": "A measurement protocol for coding query turnaround, using one query as the unit and a release date as the outcome for billing teams.",
    "thumbnail": "/images/november-11/how-long-do-coding-queries-stay-open-before-a-claim-is-released.webp",
    "heroImage": "/images/november-11/how-long-do-coding-queries-stay-open-before-a-claim-is-released.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one coding query opened on a specific date.",
      "The outcome is the number of business days from opening to claim release.",
      "The result measures query turnaround, not whether the final code was correct."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how long coding queries stay open before the related claim is released. The result describes one practice’s query process and the responsiveness of its clinical reviewers. It does not measure whether the final code was clinically correct. That requires a separate coding audit. Define the query types, the providers, and the review window before the first query is counted. Include queries opened by coders, billers, and clinical documentation specialists if they share the same log. Exclude queries that were withdrawn before any response.\n\nThe review should separate the time the query waits for the provider from the time the billing team takes to act after the answer. A single turnaround number can hide a delay on either side. Report both segments so the practice can see where the time goes. That split is the most useful part of the measurement because it points to a specific fix."
      ],
      [
        "Population and unit of analysis",
        "The unit is one coding query with a unique query number and an open date. Record the patient, the provider, the date of service, the query topic, and the claim identifier. If one query covers several claims, use the first claim release as the outcome and note the remainder. The population is every query opened in the window, including queries that were still open at the end of the review. Excluding open queries would make the process look faster than it is. Reconcile the query log with the claim hold report before analysis.\n\nReport the number of queries by provider and by query type. A single provider or a single documentation gap may dominate the result. Keep the analysis key linked to the account but store the review file in an approved location. If a query was reopened after a correction, count the first opening and note the reopening. The unit should match the decision the practice is trying to support."
      ],
      [
        "Definitions and measures",
        "A coding query is a documented question about clinical documentation that must be answered before a claim can be coded or released. The open date is the date the query was sent to the reviewer. The release date is the date the claim left the hold and was submitted or corrected. The primary measure is the median business days from open to release. Report the 90th percentile and the longest open query as well, because a few slow queries can delay a large amount of revenue. Add the share of queries open longer than the practice target.\n\nMeasure the response time separately, from the open date to the date the provider answered. Then measure the billing action time, from the answer to the release. Report both medians and the share of queries with no response by the deadline. That split shows whether the bottleneck is clinical review or billing follow-through."
      ],
      [
        "Evidence standard",
        "Each unit needs the query text, the open date, the recipient, the response, and the release date. Attach the claim hold record and the final coding note. Record the channel used and the name of the person who answered. A query described from memory is not evidence. Keep the query log and the hold report together so the reviewer can trace one claim from question to submission. If the query was answered verbally, record the date and the person who received the answer.\n\nUse a document index that lists the query log, the hold report, the response notes, and the release report. Record the date each source was received and whether it is complete. If a query was closed without a documented answer, label it as closed without response rather than inferring the reason. The evidence standard should be the same for every provider and query type."
      ],
      [
        "Sampling and collection",
        "Use every query in the window when the volume is manageable. If sampling is necessary, draw from the full query log before any outcome is known. Record the sampling frame, the method, and the exclusions. Reconcile the query log with the claim hold report and the submission report. A query that appears in one source but not the others should be investigated. Have a second reviewer recalculate the turnaround for a small overlap sample and compare the results.\n\nIf the practice has multiple coding teams or locations, sample within each one and report the results separately. A single team may account for most of the delay because of a staffing gap or a tool problem. Keep the team in the analysis key so the split can be reproduced. A pooled median can hide a serious problem at one site."
      ],
      [
        "Analysis and reporting",
        "Report the query count, the median turnaround, the 90th percentile, and the share open past target. Add the median response time and the median billing action time. Show the results by provider, query type, and team when the group sizes are large enough to protect privacy. Give the reader a decision the data can support, such as changing the query channel for a provider group or adding a daily hold review. A median without a decision is only a number.\n\nAdd a short table of the slowest query types and the step where each one stalls. A missing lab result may stall in clinical review, while an unread answer may stall in billing. The table turns the turnaround into a work plan for the owners of those steps. Share it with the coding and clinical leads, not only with the revenue cycle manager. Repeat the count after the fix and compare the same query types."
      ],
      [
        "Limitations and use",
        "The measure depends on the query log being complete and on the release date being recorded consistently. A query that was never logged will not appear, which can make the process look faster. A claim can be released with an unresolved query, which this protocol will count as a release but not as a resolution. The result describes turnaround, not coding accuracy or compliance. Report the window and the query types with every rate. Keep the source records together for another reviewer.\n\nA short turnaround does not prove that the answer was correct, and a long turnaround does not prove that the query was unnecessary. Separate speed from quality in the conclusions. If a claim was denied after release, use the coding and claim records rather than the turnaround number. This protocol is an administrative review, not a coding audit opinion."
      ],
      [
        "Reviewer worksheet",
        "Keep a one-page worksheet for each query with the open date, the response date, the release date, and the query type. Add a short note for every delay over the target and the step where it occurred. The worksheet should take less than ten minutes per query. If it takes longer, the log or the hold report is incomplete. At the end of the review, give the coding and clinical teams a short list of fixes with a deadline. Do not leave the list in the audit file without an owner. A query process that is measured and fixed prevents the same delay from repeating."
      ]
    ],
    "sources": [
      {
        "label": "National Correct Coding Initiative Edits",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "what-share-of-small-balances-are-written-off-without-documented-approval",
    "title": "What share of small balances are written off without documented approval?",
    "cluster": "measurement",
    "topic": "revenue cycle",
    "publishedAt": "2026-11-11",
    "sourceCount": 4,
    "excerpt": "A measurement protocol for small-balance write-offs, using one write-off entry as the unit and an approval record as the evidence standard.",
    "thumbnail": "/images/november-11/what-share-of-small-balances-are-written-off-without-documented-approval.webp",
    "heroImage": "/images/november-11/what-share-of-small-balances-are-written-off-without-documented-approval.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one small-balance write-off posted in the review window.",
      "An approved write-off has a named approver, a date, and the required attempt history.",
      "The result measures control compliance, not whether the balance was collectible."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of small-balance write-offs have a documented approval and the required collection attempts. The result describes one practice’s compliance with its own write-off policy. It does not measure whether the practice should have collected the balance. That depends on the patient and the account history. Define the small-balance threshold, the review window, and the write-off codes before the first entry is counted. Include write-offs posted by the billing team, the front desk, and any vendor. Exclude contractual adjustments and payer-initiated allowances.\n\nThe review should separate a missing approval from a missing collection attempt. Both are defects, but they point to different fixes. A missing approval may be a workflow problem, while a missing attempt may be a training or statement problem. Report the two categories separately so the practice can act on the right one. That split also keeps the rate from suggesting a single cause."
      ],
      [
        "Population and unit of analysis",
        "The unit is one write-off entry posted to one account on one date. Record the account, the amount, the write-off code, the posting date, and the staff member who posted it. If one account had several write-off entries, count each entry and note the account link. The population is every write-off below the policy threshold during the window, including entries that were later reversed. Excluding reversals would hide corrections that may indicate a control problem. Reconcile the write-off report with the general ledger before analysis.\n\nReport the number of entries and the dollars written off by code and by posting location. A small number of large entries can matter more than many small ones. Keep the analysis key linked to the account but store the review file in an approved location. If a write-off was posted by a vendor, record the vendor and the approval path separately. The unit should match the decision the practice is trying to support."
      ],
      [
        "Definitions and measures",
        "A documented approval is a named approver, an approval date, and a record of what was approved. A documented collection attempt is a statement, call, or other contact recorded with a date and a result. A compliant write-off has both the approval and the attempt history the policy requires. The primary measure is compliant write-offs divided by all write-offs in the window. Report the missing-approval share and the missing-attempt share separately. Add the dollar value of noncompliant entries so the reader can see the financial exposure.\n\nMeasure the time between the last collection attempt and the write-off date. A write-off posted the same day as the last attempt may not have given the patient a reasonable chance to respond. Report the median and the share posted within the policy window. That measure shows whether the process is following the policy or only producing the paperwork."
      ],
      [
        "Evidence standard",
        "Each unit needs the write-off entry, the account notes, the approval record, and the collection attempt history. Record the approver name, the date, and the amount approved. A batch approval should include the list of accounts and the reviewer who signed it. A write-off without a source document is an unapproved entry for the purpose of this review. Keep the write-off report and the approval file together. The reviewer should be able to trace one entry from the ledger to the approval.\n\nUse a document index that lists the write-off report, the approval log, the collection notes, and the reconciliation. Record the date each source was received and whether it is complete. If an approval was given verbally, label it as verbal and note whether it was later documented. The evidence standard should be the same for every posting location."
      ],
      [
        "Sampling and collection",
        "Use every write-off in the window when the volume is manageable. If sampling is necessary, draw from the full write-off report before any approval is checked. Record the sampling frame, the method, and the exclusions. Reconcile the write-off report with the general ledger and the adjustment report. An entry that appears in one source but not the other should be investigated. Have a second reviewer check a small overlap sample and compare the approval classifications.\n\nIf the practice has multiple locations or uses a vendor, sample within each one and report the results separately. A single location or vendor may account for most of the noncompliant entries. Keep the location and vendor in the analysis key so the split can be reproduced. A pooled rate can hide a problem that is easy to fix once it is isolated."
      ],
      [
        "Analysis and reporting",
        "Report the write-off count, the compliant count, the compliance rate, and the dollars in noncompliant entries. Add the missing-approval share and the missing-attempt share. Show the results by location, code, and approver when the group sizes are large enough to protect privacy. Give the reader a decision the data can support, such as requiring batch approval for a specific code or retraining a location. A rate without a decision is only a number.\n\nAdd a short table of the most common defects and the step where each one starts. A missing approval may start at the posting step, while a missing attempt may start at the statement vendor. The table turns the rate into a work plan for the owners of those steps. Share it with the billing and finance teams, not only with the practice manager. Repeat the count after the fix and compare the same codes."
      ],
      [
        "Limitations and use",
        "The measure depends on the write-off report and approval log being complete. A write-off posted to the wrong code may not appear in the population, which can understate the problem. An approval can exist but be stored in a different system, which this protocol may count as missing. The result describes control compliance, not whether the balance should have been collected. Report the window, the codes, and the sources with every rate. Keep the records together for another reviewer.\n\nA high compliance rate does not prove that the write-offs were appropriate, and a low rate does not prove that the balances were collectible. Separate control compliance from collection performance in the conclusions. If a write-off is disputed, use the account and approval records rather than the rate. This protocol is an administrative review, not a financial audit opinion."
      ],
      [
        "Reviewer worksheet",
        "Keep a one-page worksheet for each write-off with the amount, the code, the approval, and the last collection attempt. Add a short note for every missing item and the owner who can fix it. The worksheet should take less than five minutes per entry. If it takes longer, the approval log or the collection notes are incomplete. At the end of the review, give the billing and finance teams a short list of fixes with a deadline. Do not leave the list in the audit file without an owner. A write-off process that is checked and fixed prevents the same defect from repeating."
      ]
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "Fair Debt Collection Practices Act guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/credit-finance/debt-collection"
      }
    ]
  },
  {
    "slug": "how-many-days-pass-before-an-aged-claim-gets-a-payer-escalation",
    "title": "How many days pass before an aged claim gets a payer escalation?",
    "cluster": "measurement",
    "topic": "accounts receivable",
    "publishedAt": "2026-11-11",
    "sourceCount": 4,
    "excerpt": "A measurement protocol for payer escalation timing, using one aged claim as the unit and the first documented escalation as the outcome.",
    "thumbnail": "/images/november-11/how-many-days-pass-before-an-aged-claim-gets-a-payer-escalation.webp",
    "heroImage": "/images/november-11/how-many-days-pass-before-an-aged-claim-gets-a-payer-escalation.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one claim that reached the aged worklist during the window.",
      "The outcome is the business days from aging trigger to first documented escalation.",
      "The result measures follow-up timing, not whether the claim was paid."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how many business days pass before an aged claim receives its first documented payer escalation. The result describes one practice’s accounts receivable follow-up, not the payer’s processing speed. Define the aging trigger, such as thirty days from submission or sixty days from service, before the first claim is counted. Include claims that were later paid, denied, or written off. Exclude claims that were never accepted by the payer, because those need a submission fix rather than an escalation.\n\nThe review should separate the first escalation from the first call. A call that only checks status may not meet the practice definition of an escalation. State the definition in advance and apply it consistently. That distinction matters because a practice can have many calls and still fail to escalate the claims that need a supervisor or a written inquiry."
      ],
      [
        "Population and unit of analysis",
        "The unit is one claim that entered the aged worklist during the review window. Record the claim number, the payer, the submission date, the aging trigger date, and the first escalation date. If a claim was escalated more than once, use the first escalation for this measure and note later ones. The population is every claim on the aged worklist in the window, including claims that were resolved before escalation. Excluding resolved claims would remove the fastest cases and overstate the delay. Reconcile the worklist with the claim status report before analysis.\n\nReport the number of claims by payer and by dollar value. A small number of high-dollar claims can matter more than a large number of small ones. Keep the analysis key linked to the claim but store the review file in an approved location. If a claim was transferred between teams, record the transfer date so the delay can be assigned to the right step."
      ],
      [
        "Definitions and measures",
        "An aged claim is one that remains unpaid or unresolved after the practice aging trigger. A documented escalation is a payer contact or written inquiry that goes beyond a routine status check and asks for a specific action. It should include a reference number or a case identifier. The primary measure is the median business days from the trigger date to the first escalation. Report the 90th percentile and the share escalated within the practice target. Add the share that never received an escalation during the window.\n\nMeasure the time from submission to the trigger separately, because a late trigger delays everything that follows. Report the median and the share of claims that entered the worklist later than policy. That split shows whether the delay starts in the aging report or in the follow-up team. If the trigger is late, fix the report before adding more follow-up staff."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim record, the aged worklist entry, the escalation note, and the payer reference. Record the date, the representative or portal, and the action requested. A note that says the claim was called without a reference is weak evidence. Keep the worklist and the claim notes together so the reviewer can trace one claim from aging to escalation. If the escalation was sent through a portal, save the confirmation number and the case status.\n\nUse a document index that lists the worklist, the claim status report, the escalation notes, and the payer responses. Record the date each source was received and whether it is complete. If a claim was escalated verbally, label it as verbal and note whether it was later documented. The evidence standard should be the same for every payer and team."
      ],
      [
        "Sampling and collection",
        "Use every claim on the aged worklist when the volume is manageable. If sampling is necessary, draw from the full worklist before any outcome is known. Record the sampling frame, the method, and the exclusions. Reconcile the worklist with the claim status report and the payer aging report. A claim that appears in one source but not the others should be investigated. Have a second reviewer recalculate the escalation date for a small overlap sample and compare the results.\n\nIf the practice has multiple teams or locations, sample within each one and report the results separately. A single team may account for most of the delay because of staffing or workload. Keep the team in the analysis key so the split can be reproduced. A pooled median can hide a problem at one site."
      ],
      [
        "Analysis and reporting",
        "Report the aged claim count, the escalated count, the median days to escalation, and the share escalated within target. Add the share never escalated and the dollars associated with those claims. Show the results by payer, team, and dollar band when the group sizes are large enough to protect privacy. Give the reader a decision the data can support, such as adding a weekly worklist review or reassigning a payer group. A median without a decision is only a number.\n\nAdd a short table of the slowest payer groups and the step where each one stalls. A missing reference may stall at the first call, while a supervisor review may stall at the second tier. The table turns the timing into a work plan for the owners of those steps. Share it with the accounts receivable and billing teams, not only with the revenue cycle manager. Repeat the count after the fix and compare the same payer groups."
      ],
      [
        "Limitations and use",
        "The measure depends on the aged worklist and escalation notes being complete. A claim that was escalated but not logged will appear as never escalated. A claim can be paid without an escalation, which is a good outcome but not evidence that the process works. The result describes follow-up timing, not the quality of the payer relationship or the final collection outcome. Report the window, the trigger, and the payers with every rate. Keep the records together for another reviewer.\n\nA short escalation time does not prove that the escalation was effective, and a long time does not prove that the claim was collectible. Separate timing from outcome in the conclusions. If a claim is disputed, use the claim and payer records rather than the escalation rate. This protocol is an administrative review, not a financial audit opinion."
      ],
      [
        "Reviewer worksheet",
        "Keep a one-page worksheet for each payer group with the claim count, the escalated count, and the median days to escalation. Add a short note for every claim past target and the step where the delay occurred. The worksheet should take less than an hour per payer group. If it takes longer, the worklist or the escalation notes are incomplete. At the end of the review, give the accounts receivable team a short list of fixes with a deadline. Do not leave the list in the audit file without an owner. A worklist that is measured and fixed prevents the same delay from repeating."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "Medicare Learning Network",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/outreach-and-education/medicare-learning-network-mln"
      }
    ]
  },
  {
    "slug": "what-share-of-paid-claims-fall-below-the-contracted-allowed-amount",
    "title": "What share of paid claims fall below the contracted allowed amount?",
    "cluster": "measurement",
    "topic": "contract management",
    "publishedAt": "2026-11-11",
    "sourceCount": 4,
    "excerpt": "A measurement protocol for underpaid claims, using one adjudicated claim as the unit and the contracted allowed amount as the comparison.",
    "thumbnail": "/images/november-11/what-share-of-paid-claims-fall-below-the-contracted-allowed-amount.webp",
    "heroImage": "/images/november-11/what-share-of-paid-claims-fall-below-the-contracted-allowed-amount.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one adjudicated claim for a service with a contracted rate.",
      "A shortfall is an allowed amount below the contract rate after valid reductions.",
      "The result measures one practice’s payment accuracy, not the payer overall."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of paid claims fall below the contracted allowed amount during a defined period. The result describes one practice’s payment accuracy for the services and payers reviewed. It does not measure whether the contract rate itself is adequate. That is a separate negotiation question. Define the payers, the service codes, and the review window before the first claim is counted. Include claims paid at an allowed amount and exclude claims still pending or denied. Exclude claims with a documented patient eligibility change that altered the rate.\n\nThe review should separate a true underpayment from a valid reduction. Multiple procedure rules, sequester adjustments, and site-of-service differences can lower the allowed amount without a contract error. Report the two categories separately so the practice does not pursue recoveries that will not succeed. That distinction is the core of a credible underpayment measure."
      ],
      [
        "Population and unit of analysis",
        "The unit is one adjudicated claim line for a service with a contracted rate. Record the claim number, the payer, the service date, the code, the modifier, the place of service, and the allowed amount. If one claim has several lines, count each line separately because the contract rate applies by code. The population is every paid line in the window for the selected payers and codes. Excluding small shortfalls would overstate the average while hiding a high-volume pattern. Reconcile the claims with the remittance files before analysis.\n\nReport the number of lines and the dollars by payer and code group. A small number of high-dollar lines can matter more than many small ones. Keep the analysis key linked to the claim but store the review file in an approved location. If a line was corrected after the original payment, use the final adjudication and note the correction date."
      ],
      [
        "Definitions and measures",
        "The contracted allowed amount is the rate in the fee schedule for the code, modifier, and place of service, after applying the contract rules. A shortfall is an allowed amount below that rate by more than a stated tolerance. A valid reduction is a documented adjustment that the contract permits, such as a multiple procedure reduction. The primary measure is shortfall lines divided by all paid lines in the population. Report the dollar-weighted shortfall as well. Add the share of shortfalls that were later corrected or recovered.\n\nMeasure the time from the remittance date to the first underpayment inquiry. A practice can identify a shortfall and still lose the appeal window if the follow-up is slow. Report the median and the share that missed the payer deadline. That measure shows whether the review is timely enough to recover the money."
      ],
      [
        "Evidence standard",
        "Each unit needs the remittance, the claim, the contracted rate source, and the expected amount calculation. Record the contract effective date and the payer policy used for any valid reduction. A shortfall without the rate source is an opinion, not a finding. Keep the remittance file and the rate sheet together. The reviewer should be able to recompute one expected amount from the source documents.\n\nUse a document index that lists the remittance file, the claim report, the fee schedule, and the recovery log. Record the date each source was received and whether it is complete. If the contract rate is a percentage of Medicare, include the Medicare rate and the calculation. The evidence standard should be the same for every payer and code group."
      ],
      [
        "Sampling and collection",
        "Use every paid line in the selected population when the volume is manageable. If sampling is necessary, draw from the full paid-line file before any shortfall is known. Record the sampling frame, the method, and the exclusions. Reconcile the paid-line count with the remittance and general ledger. A line that appears in one source but not the other should be investigated. Have a second reviewer recompute a small overlap sample and compare the shortfall classifications.\n\nIf the practice has multiple payer contracts or locations, sample within each one and report the results separately. A single payer or code group may account for most of the shortfall. Keep the payer and location in the analysis key so the split can be reproduced. A pooled rate can hide a contract-specific problem."
      ],
      [
        "Analysis and reporting",
        "Report the paid-line count, the shortfall count, the shortfall share, and the dollar-weighted share. Add the recovery count and the dollars recovered. Show the results by payer, code group, and month when the group sizes are large enough to protect privacy. Give the reader a decision the data can support, such as filing a batch appeal or raising a rate issue at contract renewal. A rate without a decision is only a number.\n\nAdd a short table of the most common shortfall causes and the step where each one starts. A wrong fee schedule may start in the payer setup, while a missed modifier may start in coding. The table turns the rate into a work plan for the owners of those steps. Share it with the contracting and billing teams, not only with the revenue cycle manager. Repeat the count after the fix and compare the same code groups."
      ],
      [
        "Limitations and use",
        "The measure depends on the fee schedule being current and on the contract rules being applied correctly. A rate that changed during the window can create false shortfalls. A claim can be paid correctly at a lower rate because of a valid reduction that the reviewer misses. The result describes payment accuracy for the selected population, not the entire contract. Report the window, the payers, and the codes with every rate. Keep the source records together for another reviewer.\n\nA high shortfall rate does not prove that the payer is acting in bad faith, and a low rate does not prove that the contract is profitable. Separate payment accuracy from contract adequacy in the conclusions. If a claim is disputed, use the remittance and contract records rather than the rate. This protocol is an administrative review, not a legal or contracting opinion."
      ],
      [
        "Reviewer worksheet",
        "Keep a one-page worksheet for each payer with the paid-line count, the shortfall count, and the top code groups. Add a short note for every shortfall and the cause category. The worksheet should take less than an hour per payer group. If it takes longer, the fee schedule or the remittance file is incomplete. At the end of the review, give the contracting and billing teams a short list of fixes with a deadline. Do not leave the list in the audit file without an owner. A review that is acted on prevents the same shortfall from repeating."
      ]
    ],
    "sources": [
      {
        "label": "Physician Fee Schedule",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/payment/fee-schedules/physician"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "National Correct Coding Initiative Edits",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      }
    ]
  }
];
