import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november7Research = [
  {
    "slug": "how-often-do-claim-edits-fire-on-fields-that-were-already-correct",
    "title": "How often do claim edits fire on fields that were already correct?",
    "cluster": "measurement",
    "topic": "claim edit false positives",
    "publishedAt": "2026-11-07",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for claim edit false positives, with one blocked edit as the unit, a correctness rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-7/how-often-do-claim-edits-fire-on-fields-that-were-already-correct.webp",
    "heroImage": "/images/november-7/how-often-do-claim-edits-fire-on-fields-that-were-already-correct.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one blocked claim edit with a recorded rule identifier.",
      "A false positive means the field would have passed the payer without a change.",
      "The result describes the sampled edit set, not the vendor rule library."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a claim edit blocks a claim even though the flagged field was already correct. The purpose is to find rules that create work without preventing a rejection or denial. A high false-positive rate is not automatically a reason to remove a rule, but it is a reason to look closely at the rule and the workflow around it. The answer describes the edits used by one billing team during a defined window. It does not measure the quality of a vendor rule library or the performance of an individual specialist.\n\nThe scope should name the claim types, payers, and edit categories included in the review. Exclude edits that never block the claim, such as informational warnings, unless the protocol states how they are handled. Exclude claims that were corrected for a different reason after the edit fired, because the two changes cannot be separated. State whether resubmitted claims count as new edit instances. Write the scope before collection so the population cannot shift after the results are known.\n\nKeep the review inside the administrative boundary. The analysis can describe whether a field was correct, but it should not turn into a coding audit or a clinical review. If a rule depends on a coding or medical necessity judgment, route that question to the qualified reviewer. The billing team can measure the process around the rule without deciding the clinical question. That distinction keeps the protocol honest and within the team's authority."
      ],
      [
        "Population and unit of analysis",
        "The unit is one blocked claim edit with a rule identifier, a claim identifier, and a documented resolution. If the same claim triggers three rules, count three units unless the team decides in advance that only the first rule counts. Write that decision down and apply it every time. A unit definition that changes between payers makes the comparison unreadable. Link the unit to the claim so a reviewer can inspect the original data.\n\nThe population is every blocked edit in the window that meets the scope, not only the edits the team decided to override. Edits that were resolved by changing the claim are part of the population too. If the log cannot show which rule fired, mark the case as unverifiable rather than guessing. Report the unverifiable count alongside the primary count. That third category keeps the denominator visible and prevents a tidy result from hiding missing data."
      ],
      [
        "Definitions and measures",
        "A false positive means the flagged field was correct at the time of the edit, and the claim would not have been rejected or denied because of that field. A true positive means the field needed a change, even if the specialist changed something else at the same time. An unresolved case means the reviewer could not determine the original correctness from the available evidence. Use these three categories consistently and write an example of each before classification starts. Avoid a fourth category such as unclear without a definition.\n\nThe primary measure is the number of false positives divided by all classified blocked edits. Report the numerator, the denominator, and the share with the observation window. Supporting measures can include the median minutes to resolve an edit, the share of edits that were overridden, and the share that led to a corrected claim. Keep the supporting measures tied to the same unit. A measure that requires a separate spreadsheet is likely to drift or disappear.\n\nA useful companion measure is the share of edits that were resolved with no change to the claim. That is narrower than a false positive because a specialist may have confirmed the field and released the claim without an override. Report it beside the primary rate and explain the difference. The two numbers answer related questions and should not be combined into one score. Keeping them separate helps the reviewer see whether the rule or the release step is creating the work."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim identifier, the rule identifier, the date and time the edit fired, the flagged field value, the source of the expected value, and the resolution. The source may be a payer response, a registration record, a scheduling record, or the original claim image. Record who reviewed the case and when. If the evidence is a screenshot, confirm that it shows the field and the date. A cropped image without the claim context is weak evidence for a false-positive claim.\n\nHandle patient information according to the practice privacy and security policies. Use a pseudonymous claim key in the analysis file and keep the crosswalk in an approved system. Do not copy unnecessary clinical detail into the review notes. If a claim contains sensitive information that the review does not need, exclude that field from the extract. The measurement should use the minimum data required to answer the question.\n\nKeep the original field value separate from the corrected value. A reviewer should be able to see what the rule saw, not only what the claim looks like after the correction. If the claim was rebuilt rather than edited, note that change because it may affect the comparison. Store the rule version or effective date with the unit. A rule that changed during the window may explain a shift in the false-positive rate."
      ],
      [
        "Sampling and collection",
        "Use all blocked edits in the window when the volume is manageable. If sampling is necessary, draw from the full edit log rather than from the cases that were overridden. A sample built from overrides will overstate the false-positive rate because it excludes the claims that were corrected without an override. Record the sampling frame, the method, and every exclusion. Stratify by rule or payer only after the overall count is visible.\n\nReconcile the edit log against the claim system before analysis. Missing claim links should be counted, not silently dropped. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate is useful evidence about the definition. Do not change the classification rule during collection unless the change is documented and applied to a later window. The team should be able to repeat the count from the saved files."
      ],
      [
        "Analysis and reporting",
        "Report the classified edit count, the false-positive count, the true-positive count, and the unverifiable count. Show the share with its denominator and the observation window. Group the results by rule, because a team-wide rate can hide one rule that creates most of the friction. Show the median resolution time beside each rule. A rule with a modest false-positive rate but a long delay may still deserve attention.\n\nGive the billing lead a decision the review can support, such as narrowing a rule, changing it to a warning, or retraining the field entry step. Do not present the share as proof that the edit vendor is wrong or that the team is careless. The data describes the sampled edits in this practice. If a rule is consistently producing false positives, test one change and compare the next window. Record the change date so the next review can separate before and after.\n\nKeep a short list of the rules with the highest false-positive count and the longest resolution time. Review that list with the rule owner before the next tuning cycle. Do not change a rule and the evidence standard in the same week, because the result will be hard to interpret. A small, documented change is easier to defend than a broad cleanup."
      ],
      [
        "Limitations and use",
        "The count depends on the quality of the edit log and the reviewer's ability to reconstruct the original field. A team that documents more carefully may appear to have more false positives because the evidence is easier to classify. A rule may also fire correctly and still look wrong if the expected value changed after the claim was built. These limits should travel with the number. Use the result to improve the edit set, not to rank individuals or make a contract claim.\n\nThis protocol is administrative workflow research, not a coding, clinical, legal, or compliance determination. It does not establish whether a claim was correct or whether a payer would have paid it. Review any rule change with the billing lead and the qualified owner before adoption. Keep the edit log, the evidence, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate. The value of the review is the decision it enables, not the decimal places in the result."
      ]
    ],
    "sources": [
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "CMS Administrative Simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      },
      {
        "label": "National Correct Coding Initiative Edits",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "what-share-of-lockbox-deposits-post-on-the-same-business-day",
    "title": "What share of lockbox deposits post on the same business day?",
    "cluster": "measurement",
    "topic": "lockbox posting timeliness",
    "publishedAt": "2026-11-07",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for lockbox posting timeliness, with one deposit-to-batch pair as the unit, a same-day rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-7/what-share-of-lockbox-deposits-post-on-the-same-business-day.webp",
    "heroImage": "/images/november-7/what-share-of-lockbox-deposits-post-on-the-same-business-day.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one deposit matched to one posting batch.",
      "Same-day means the posted batch date equals the bank deposit date.",
      "A weekend or bank holiday is reported separately, not forced into the share."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of lockbox deposits are posted to patient and payer accounts on the same business day the bank records the deposit. The question matters because a deposit that sits unposted hides cash, delays patient statements, and makes the daily reconciliation harder. The answer describes one practice and one set of bank and posting workflows. It is not a benchmark for the banking or revenue cycle industry. The definitions and the observation window must be fixed before the first export.\n\nThe scope should name the lockbox accounts, the payment types, and the posting systems included in the review. Exclude deposits that belong to another entity or a different bank account. State whether patient payments, payer remittances, and other deposits are reported separately or combined. A combined view can hide a slow path in one payment type. Decide whether the review covers business days only and how weekends and bank holidays are handled. Write those choices down before looking at the results.\n\nKeep the review inside the administrative workflow. The protocol measures posting timing, not the accuracy of the payment allocation or the quality of the bank. A deposit can post on time and still be applied to the wrong account. A separate review should handle allocation errors. That separation keeps the timeliness question answerable and prevents one measure from carrying too many meanings."
      ],
      [
        "Population and unit of analysis",
        "The unit is one bank deposit matched to one posting batch, with a bank date, a batch date, and a total for each side. If a deposit is split across several batches, decide in advance whether it counts once or once per batch. If one batch contains several deposits, pair each deposit with the portion that belongs to it. The unit should follow the money, not the file layout. Record the pairing rule so another reviewer can rebuild the population.\n\nThe population is every eligible deposit in the window, including deposits that never posted, deposits that posted late, and deposits that required an adjustment. Do not exclude the failures, because they are the point of the review. If a deposit cannot be matched because the bank detail is incomplete, mark it unverifiable and report that count. The reviewer should be able to rebuild the population from the bank file and the batch list, not from memory."
      ],
      [
        "Definitions and measures",
        "Same-day posting means the batch date equals the bank deposit date, using the practice's defined business-day calendar. A deposit that appears after the bank cutoff may be dated the next business day, so record the bank's actual date rather than the date the practice downloaded the file. A late posting means the batch date is after the deposit date. An unposted deposit means no matching batch exists by the end of the observation window. Keep those categories separate and define each with an example.\n\nThe primary measure is the number of same-day deposits divided by all matched and unposted deposits in the window. Report the numerator, the denominator, and the share. Supporting measures can include the median posting delay in business days, the share of deposits with an unidentified item, and the share that needed an adjustment. Keep the supporting measures on the same unit. If a measure requires a different dataset, say so and report it separately rather than blending it into the primary rate."
      ],
      [
        "Evidence standard",
        "Each unit needs the bank account, the deposit date, the deposit reference, the deposit total, the batch identifier, the batch date, and the batch total. Add the reviewer name and the date the match was checked. If a deposit has multiple components, keep the detail that shows how the total was built. A screenshot of a bank balance is not enough because it does not show the deposit date or the reference. Prefer a downloaded statement or a report that can be tied to the accounting period.\n\nSave the reconciliation evidence with the batch and avoid copying unnecessary patient information into the analysis file. Use a pseudonymous batch key and keep the crosswalk in an approved system. If the payment detail includes sensitive information, extract only the fields needed for the timing measure. Follow the practice privacy and security policies for any export. The evidence should let another reviewer repeat the match without opening a live bank session.\n\nWhen a deposit is unmatched, record what was searched, such as the amount, the check number, the payer, and the date. A blank unmatched row is hard to distinguish from an unsearched one. Note the time spent on the search and the person who performed it. That detail helps the team see whether the gap is a data problem or a capacity problem. Keep the unmatched item in the population until it is resolved or the window closes.\n\nA daily reconciliation log is helpful only if it shows the date the gap was found and the date it was closed. Add a short note for any deposit that required a second match attempt. That note reveals whether the delay came from a missing file, an unclear reference, or a posting error. Keep the note factual and free of patient detail. Over time, the notes show which part of the workflow needs attention."
      ],
      [
        "Sampling and collection",
        "Use all eligible deposits in the window when the volume is manageable. If sampling is necessary, draw from the full bank deposit list rather than from the batches that were easy to match. A sample built from clean batches will understate the posting delay. Stratify by payment type or lockbox only after the overall count is known. Record the sampling method, the frame, and every exclusion.\n\nCollect the bank file and the posting report on the same schedule each day so the comparison stays consistent. Reconcile the counts before analysis and note any day the bank file was missing. Have a second reviewer recheck a small sample of matches. Record disagreements and resolve them with the written rule. If the rule cannot resolve a disagreement, revise it for the next window rather than changing the current classification."
      ],
      [
        "Analysis and reporting",
        "Report the eligible deposit count, the same-day count, the late count, the unposted count, and the unverifiable count. Show the same-day share with its denominator and the observation window. Break the results out by payment type and lockbox so the billing lead can see where the delay sits. Do not rank individual posters on a measure that depends on bank timing and file delivery. A person who receives a late file may look slower than a person who receives an early one.\n\nUse the findings to decide whether the cutoff, the file delivery, or the posting capacity needs attention. A cluster of late postings on one weekday may point to a staffing gap, while a cluster on one payment type may point to a file format issue. Record the next action and the date the team will review the effect. A report that ends with an observation is less useful than one that ends with a testable change.\n\nReport the daily result in a small table with the deposit date, the batch date, the deposit total, and the matched total. A reader should be able to see the gap without opening another file. Add a short note for any day when the bank file arrived late or the batch was incomplete. Those notes explain a temporary dip without hiding it. The table is more useful than a single monthly percentage because it shows the pattern."
      ],
      [
        "Limitations and use",
        "The share depends on the bank's posting time, the practice's cutoff, and the quality of the batch links. A bank that posts later in the day may make the practice look slower even when the work is completed promptly. A holiday week can distort a small sample. These limits should be stated with the result. Use the review to improve the daily cash process, not to make a claim about a bank or a payer.\n\nThis protocol is administrative workflow research, not an accounting opinion or a legal determination. It does not establish whether a deposit was properly applied or whether the practice met a contractual deadline. Review any change with the billing lead and the finance owner before adoption. Keep the bank detail, the posting report, and the analysis file together so the count can be repeated. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "CMS Administrative Simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      },
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "SBA Manage Your Business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ]
  },
  {
    "slug": "where-do-authorization-numbers-drop-off-before-claim-submission",
    "title": "Where do authorization numbers drop off before claim submission?",
    "cluster": "measurement",
    "topic": "authorization tracking",
    "publishedAt": "2026-11-07",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for authorization tracking, with one scheduled case as the unit, four handoff checkpoints, and explicit limits for billing teams.",
    "thumbnail": "/images/november-7/where-do-authorization-numbers-drop-off-before-claim-submission.webp",
    "heroImage": "/images/november-7/where-do-authorization-numbers-drop-off-before-claim-submission.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one scheduled case that requires an authorization.",
      "Each case is checked at scheduling, authorization, claim build, and submission.",
      "A drop-off is a missing or mismatched value at a later checkpoint."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks where an authorization number stops traveling with the case between scheduling and claim submission. The number may be received but not entered, entered but not matched to the service, or matched but not carried into the claim. Each point of loss calls for a different fix. The answer describes the sampled cases in one practice and one set of systems. It does not measure payer authorization accuracy or the clinical appropriateness of a service.\n\nThe scope should name the service lines, payers, and appointment types that require an authorization. Exclude cases that do not need one, but report how that was determined. State whether urgent add-on cases and rescheduled visits are included. If a case has more than one authorization, decide whether it counts once or once per authorization. Write the scope before collection so the population cannot be adjusted after the results are known.\n\nKeep the review administrative. The team can track whether a number exists and matches the scheduled service, but it should not decide whether the service is authorized in a clinical sense. Questions about medical necessity or covered benefits belong with the qualified reviewer or the payer. That boundary keeps the protocol focused on the handoff and prevents it from becoming a coverage determination."
      ],
      [
        "Population and unit of analysis",
        "The unit is one scheduled case that requires an authorization and has a recorded service date. A case can have multiple appointments, so decide in advance whether the case or the appointment is the unit. Use the appointment when the authorization is service-specific, and the case when one authorization covers a series. Apply the chosen rule to every record. A unit definition that changes by payer makes the drop-off pattern hard to compare.\n\nThe population is every eligible case in the window, including cases that were cancelled after scheduling and cases that never reached a claim. Do not limit the review to submitted claims, because that would hide the cases that dropped out before submission. If a case cannot be linked across systems, mark it unverifiable and report the count. The reviewer should be able to rebuild the population from the scheduling list and the claim list."
      ],
      [
        "Definitions and measures",
        "A drop-off means the authorization value is missing or mismatched at a later checkpoint even though it was present and correct at an earlier one. A mismatch includes a wrong number, a wrong service, a wrong date range, or a wrong provider. A case that never had an authorization is a different problem and should be reported separately. Define each checkpoint and what counts as present, correct, and matched. Use the same definitions for every case.\n\nThe primary measure is the number of cases with at least one drop-off divided by all eligible cases. Report the checkpoint where the first drop-off occurred. Supporting measures can include the share of cases with a number at scheduling, the share with a verified match before the visit, and the share with the number on the submitted claim. Keep the measures tied to the same case so the funnel is readable. A count without a checkpoint does not tell the team where to act."
      ],
      [
        "Evidence standard",
        "Each case needs the appointment identifier, the patient identifier, the payer, the service date, the authorization number, the authorization dates, and the claim identifier when one exists. Record the value at each checkpoint and the source of that value. A scheduling note, a payer portal, and a claim field are different sources and should be labeled. If the number was changed, keep the earlier value and the reason. The evidence should show the path, not only the final state.\n\nUse a pseudonymous case key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the handoff review does not need. If a payer response is saved as a screenshot, confirm that it shows the number, the service, and the date. A screenshot from a different day is weak evidence for this case. Follow the practice privacy and security policies for any export.\n\nWhen a case is unverifiable, record what was missing. A blank claim field may mean the number was never entered, or it may mean the field was not displayed in the extract. Those are different findings. Check the source system before classifying the case. A reviewer should be able to tell whether the drop-off happened in the workflow or in the data pull. That distinction protects the team from a false conclusion.\n\nA checkpoint review should also capture who performed each handoff and when. A number can be present in the system but still not reviewed by the next person. Record the acknowledgment rather than only the entry. That detail separates a data gap from a handoff gap. The distinction is useful when the team decides whether to change the form or the responsibility."
      ],
      [
        "Sampling and collection",
        "Use all eligible cases in the window when the volume is manageable. If sampling is necessary, draw from the full scheduling list rather than from the claims that were denied for authorization. A denial-based sample will overstate the drop-off rate because it selects the failures. Record the sampling frame, method, and exclusions. Stratify by service line or payer after the overall count is known.\n\nReconcile the scheduling list, the authorization log, and the claim list before analysis. Missing links should be counted, not dropped. Have a second reviewer recheck a small sample of cases at each checkpoint. Record disagreements and resolve them with the written rule. If the rule cannot resolve a disagreement, revise it for the next window rather than changing the current classification."
      ],
      [
        "Analysis and reporting",
        "Report the eligible case count and the count of cases with a drop-off at each checkpoint. Show the first drop-off separately from later drops, because a case that fails at scheduling may also fail at submission. Group the results by service line and payer. A high drop-off rate for one payer may point to a portal or format issue, while a rate spread across payers may point to a local handoff problem. Do not rank individual schedulers on a measure that depends on system design.\n\nGive the billing lead a decision the review can support, such as adding a required field, changing the handoff, or testing a payer-specific path. Record the change and the date the team will compare the next window. If the drop-off is concentrated at one checkpoint, fix that step first. A broad training reminder is weaker than a specific workflow change. The report should end with one testable action.\n\nShare the checkpoint results with scheduling and billing in the same conversation. Each group sees only part of the path, and the drop-off often sits between them. Ask each group to explain what they receive and what they pass on. Write the agreed handoff in one sentence. The sentence becomes the standard the next review tests.\n\nWhen a case is rescheduled, recheck the authorization as if it were a new appointment. The number may still be valid, but the date or the service may have changed. Record the recheck date and the result. Do not assume that a prior confirmation carries forward without evidence. A short recheck prevents a late surprise at claim time."
      ],
      [
        "Limitations and use",
        "The count depends on the quality of the scheduling, authorization, and claim records. A practice that documents more carefully may appear to have more drop-offs because the gaps are visible. A payer may also change its authorization requirements during the window, which can make a case look wrong when it followed the rule at the time. These limits should travel with the result. Use the review to improve the handoff, not to judge a person or a payer without context.\n\nThis protocol is administrative workflow research, not a clinical, coding, legal, or compliance determination. It does not establish whether a service was authorized or whether a claim should be paid. Review any workflow change with the billing lead and the qualified owner before adoption. Keep the source records and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "CMS Administrative Simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      },
      {
        "label": "Health IT Interoperability",
        "publisher": "Office of the National Coordinator for Health IT",
        "url": "https://www.healthit.gov/topic/interoperability"
      },
      {
        "label": "CMS Burden Reduction",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/priorities/key-initiatives/burden-reduction/interoperability/policies-and-regulations"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ]
  },
  {
    "slug": "how-old-is-the-documentation-hold-queue-at-the-end-of-each-week",
    "title": "How old is the documentation hold queue at the end of each week?",
    "cluster": "measurement",
    "topic": "documentation hold aging",
    "publishedAt": "2026-11-07",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for documentation hold aging, with one hold event as the unit, age bands, owner checks, and explicit limits for billing teams.",
    "thumbnail": "/images/november-7/how-old-is-the-documentation-hold-queue-at-the-end-of-each-week.webp",
    "heroImage": "/images/november-7/how-old-is-the-documentation-hold-queue-at-the-end-of-each-week.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one claim hold event with a reason and an owner.",
      "Age is measured from the hold start date to the weekly snapshot date.",
      "Median age and the oldest items are reported separately."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how old the open documentation holds are at the end of each week. The question is narrow because a single average can hide a small group of claims that have waited far too long. The review measures the age distribution, the reasons, and the owners. It describes the holds in one billing team and one documentation workflow. It does not measure clinical documentation quality or the appropriateness of a claim.\n\nThe scope should name the claim types, payers, and hold reasons included in the weekly snapshot. Exclude holds that belong to another team or another system, but report the excluded count. State whether a hold that was reopened counts as a new event or a continuation. Decide how to handle holds with no start date. Write those rules before the first snapshot so the weekly numbers can be compared.\n\nKeep the review administrative. The team can measure how long a record request waits, but it should not judge whether the documentation is clinically sufficient. That question belongs with the qualified reviewer. A hold can be old because the record is missing, because the request went to the wrong person, or because the claim owner did not follow up. The protocol should separate those possibilities without turning into a clinical audit."
      ],
      [
        "Population and unit of analysis",
        "The unit is one open claim hold event at the weekly snapshot. If a claim has two holds for different reasons at the same time, decide in advance whether it counts once or once per reason. Counting once keeps the claim count clear, while counting per reason shows which reason is driving the queue. Choose the approach that matches the decision the report is meant to support. Apply it consistently and write it down.\n\nThe population is every open hold at the snapshot time that meets the scope. Do not exclude old holds just because they are already escalated. A hold that was closed during the week is not in the snapshot, but its duration can be reported separately as a completed item. If a hold cannot be matched to a claim, mark it unverifiable and report the count. The reviewer should be able to rebuild the snapshot from the queue export and the claim system."
      ],
      [
        "Definitions and measures",
        "Age is the number of calendar days from the hold start date to the snapshot date. Use calendar days rather than business days for the primary measure, because a hold does not stop over a weekend. Report the median age, the age of the oldest item, and the count in defined bands such as zero to two days, three to seven days, eight to fourteen days, and more than fourteen days. Define the bands before collection and keep them stable across weeks.\n\nThe primary measure is the median age of open holds. Supporting measures can include the count of holds older than the escalation trigger, the share with a named owner, the share with a documented follow-up date, and the share waiting on the practice versus the payer. Keep the measures tied to the same snapshot. A count of old holds without a reason or an owner is hard to act on. The report should show both the size and the shape of the queue."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim identifier, the hold reason, the hold start date, the request date, the follow-up date, the owner, and the current status. Add the snapshot date and the person who prepared the export. If the queue has a free-text note, quote only what is needed to classify the reason. A note that says waiting is not a reason. The evidence should let another reviewer place the hold in the same category.\n\nUse a pseudonymous claim key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail into the weekly report. If a hold depends on a payer response, record the reference and the date of the last contact. If a hold depends on a practice record, record who was asked and when. Follow the practice privacy and security policies for any export.\n\nWhen the start date is missing, do not estimate it from the last update. Mark the hold as unverifiable and report the count. A snapshot that silently assigns a new date to an old hold will make the queue look younger than it is. Fix the missing date at the source and keep the unverifiable count visible until it clears. That discipline protects the credibility of the weekly trend.\n\nA hold that moves between owners can look new in the queue even when it is old. Keep the original start date and add a transfer date rather than replacing the start. Record the reason for the transfer and the new owner. That history shows whether the queue is cycling work or making progress. Without it, a weekly snapshot can hide a long-running item.\n\nUse the same snapshot day each week so the age bands are comparable. If a holiday or a system outage changes the collection day, note it in the report. Do not compare a six-day week with a five-day week without saying so. The reader should know when the snapshot was taken and what changed. A short note protects the trend from a false conclusion."
      ],
      [
        "Sampling and collection",
        "Use a full weekly snapshot rather than a sample when the queue is small. A sample is difficult to interpret for the oldest items because a few cases can carry most of the age. If the queue is large, take a random sample for the reason analysis but still report the full count and the oldest items. Record the sampling method and the frame. Do not sample only the items that are easy to classify.\n\nTake the snapshot on the same day and at the same time each week. Reconcile the queue export against the claim system before analysis. Note any week when the export failed or the queue was unavailable. Have a second reviewer classify a small overlap sample. Record disagreements and resolve them with the written rule. A stable collection routine is more valuable than a larger one-off review."
      ],
      [
        "Analysis and reporting",
        "Report the open hold count, the median age, the oldest item, and the count in each age band. Break the results out by reason and owner so the billing lead can see where the age sits. Show the share with a documented follow-up date. A queue can be small and still be unhealthy if the oldest items have no next action. Put the oldest five items in the report with the reason and the owner, without unnecessary patient detail.\n\nUse the findings to decide whether the team needs a source fix, an escalation, or more capacity. A cluster of old holds in one reason may point to a template or a request path. A cluster in one owner may point to an unplanned absence or an unclear handoff. Record one change and the date the team will compare the next snapshot. The review should end with a concrete action rather than a general request to work the queue faster.\n\nKeep the oldest items visible even when the overall median improves. A queue can look healthier while a few claims wait for months. Report the count older than the longest band and name the owner for each. That small list is often the most actionable part of the review."
      ],
      [
        "Limitations and use",
        "The median age depends on the start date, the snapshot timing, and the reason definitions. A queue that closes old items quickly at the end of the week may look younger than it felt during the week. A small queue can move a lot from one case. These limits should be stated with the result. Use the review to improve the documentation workflow, not to compare teams without context.\n\nThis protocol is administrative workflow research, not a clinical, coding, legal, or compliance determination. It does not establish whether a claim should be paid or whether the documentation was adequate. Review any workflow change with the billing lead and the clinical owner before adoption. Keep the queue export, the evidence, and the analysis file together so another reviewer can repeat the snapshot. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking median."
      ]
    ],
    "sources": [
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Medical Records and Health Information Technicians",
        "publisher": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/medical-records-and-health-information-technicians.htm"
      }
    ]
  },
  {
    "slug": "how-much-charge-lag-sits-between-service-and-claim-submission",
    "title": "How much charge lag sits between service and claim submission?",
    "cluster": "measurement",
    "topic": "charge lag",
    "publishedAt": "2026-11-07",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for charge lag, with one charge line as the unit, stage timestamps, service-line thresholds, and explicit limits for billing teams.",
    "thumbnail": "/images/november-7/how-much-charge-lag-sits-between-service-and-claim-submission.webp",
    "heroImage": "/images/november-7/how-much-charge-lag-sits-between-service-and-claim-submission.webp",
    "readingMinutes": 14,
    "keyStats": [
      "The unit is one charge line tied to a service date and a submission date.",
      "Lag is split into documentation, charge-ready, and submission stages.",
      "Median and high-percentile lag are reported separately."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how much time passes between the date of service and the date a claim is submitted, and where that time accumulates. The total is useful, but the stage split is what helps a billing team act. A lag can sit in documentation, in the charge entry queue, or in the claim review step. The answer describes one practice and one service mix. It does not measure the clinical necessity of a service or the correctness of a code.\n\nThe scope should name the service lines, locations, and payer types included in the review. Exclude claims that were held for a patient response or a payer request, but report the excluded count. State whether a corrected claim counts as a new line or the same line with additional stages. Decide how to handle a service that was cancelled after the charge was created. Write those choices before the export.\n\nKeep the review administrative. The team can measure when a charge became ready and when a claim left the practice, but it should not judge whether the documentation was clinically complete. That judgment belongs with the qualified reviewer. The protocol can show that a record waited, not that the wait was justified or unjustified. That boundary matters when the results are shared with clinical departments."
      ],
      [
        "Population and unit of analysis",
        "The unit is one charge line with a service date, a charge-ready date, and a claim submission date. If a claim contains several lines, each line may have a different service date and a different lag. Count the line rather than the claim when the dates differ. If a line is bundled or replaced, record the change and decide in advance whether the original line remains in the population. The unit should match the question about timeliness.\n\nThe population is every eligible charge line in the window, including lines that were submitted late and lines that were never submitted. Do not exclude the late items, because they are the reason for the review. If a line cannot be linked to a submission, mark it unverifiable and report the count. The reviewer should be able to rebuild the population from the charge system and the claim system. A clean population is more important than a large one.\n\nDocument the timestamp source for each stage before collection. A system may record the first save rather than the final approval, and that difference can move a charge between stages. Write the field name and the system name in the protocol. If the source changes during the review, note the date and report the stages separately. Consistency is more important than the number of fields."
      ],
      [
        "Definitions and measures",
        "Total charge lag is the number of calendar days from the service date to the claim submission date. Stage one is service to charge-ready, stage two is charge-ready to claim-ready, and stage three is claim-ready to submission. Define each stage with a timestamp that the systems actually record. If a timestamp is missing, mark the stage as unverifiable rather than estimating it. Use calendar days for the primary measure and state whether business days are reported separately.\n\nThe primary measure is the median total lag for each service line. Supporting measures can include the 90th percentile, the share of lines submitted within the practice target, and the share of total lag in each stage. Report the count as well as the percentages. A median without a count can hide a small group. Keep the measures tied to the same line so the stages add up to the total, or explain why they do not."
      ],
      [
        "Evidence standard",
        "Each unit needs the charge line identifier, the claim identifier, the service date, the charge-ready timestamp, the claim-ready timestamp, the submission timestamp, and the service line. Add the payer and the location if they affect the workflow. Record the source system for each timestamp. A timestamp copied from a free-text note is weaker than one recorded by the system. The evidence should show the sequence, not only the final date.\n\nUse a pseudonymous line key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the lag review does not need. If a timestamp is corrected during the review, keep the original and the correction with a reason. Follow the practice privacy and security policies for any export. The analysis should be repeatable from the saved data.\n\nWhen a claim is resubmitted, record the first submission and the later submission separately. The first submission date is usually the right endpoint for the original lag, while the later date belongs to a different question. Do not let a correction silently extend the original lag. If the team wants to measure rework, create a separate measure. Mixing the two will make the original workflow look slower than it was."
      ],
      [
        "Sampling and collection",
        "Use all eligible charge lines in the window when the volume is manageable. If sampling is necessary, draw from the full charge list rather than from the claims that were easy to submit. A sample built from clean claims will understate the lag. Stratify by service line after the overall distribution is known. Record the sampling method, the frame, and every exclusion.\n\nReconcile the charge list against the claim list before analysis. Missing links should be counted, not dropped. Have a second reviewer recheck a small sample of timestamps against the source systems. Record disagreements and resolve them with the written rule. If a timestamp definition is ambiguous, fix the definition before the next window rather than changing the current classification. Consistency matters more than a perfect first pass.\n\nReview a few high-lag lines with the people who touched them. Ask which step felt slow and what they were waiting for. The answer may be a missing order, an unclear note, or a queue that only one person can work. Record the explanation in a short category. The category gives the team a way to test a fix without reading every case."
      ],
      [
        "Analysis and reporting",
        "Report the eligible line count, the median total lag, the 90th percentile, and the stage split for each service line. Show the share submitted within the practice target. Put the oldest items in a short exception list with the stage where they waited. Do not present a single practice-wide median as the whole story when the service lines have different workflows. A comparison by service line is more useful than a blended number.\n\nUse the findings to choose one stage to improve. A long documentation stage calls for a clinical workflow conversation, while a long submission stage calls for a billing capacity or review discussion. Record the change and the date the team will compare the next window. If the change affects only one service line, test it there before spreading it. A focused test is easier to interpret than a practice-wide rollout.\n\nReport the stage split alongside the total so a reader can see where the time sits. A total that improves while one stage worsens is a warning, not a success. Use the same stage definitions each month. When a definition changes, mark the break in the trend instead of comparing across it."
      ],
      [
        "Limitations and use",
        "The lag depends on the timestamps the systems record and the point at which a charge is considered ready. A practice that marks charges ready earlier may look faster even if the claim still waits. A holiday, a system outage, or a staffing change can distort a short window. These limits should travel with the result. Use the review to improve the handoff, not to compare departments without context.\n\nThis protocol is administrative workflow research, not a coding, clinical, legal, or compliance determination. It does not establish whether a claim was correct or whether a payer met a timely filing rule. Review any workflow change with the billing lead and the qualified owner before adoption. Keep the charge data, the claim data, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking median."
      ]
    ],
    "sources": [
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "CMS Physician Fee Schedule",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/medicare-fee-for-service-payment/physicianfeesched"
      },
      {
        "label": "CMS Administrative Simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "how-often-does-a-retroactive-eligibility-termination-require-a-claim-rebill",
    "title": "How often does a retroactive eligibility termination require a claim rebill?",
    "cluster": "measurement",
    "topic": "retroactive eligibility",
    "publishedAt": "2026-11-07",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for retroactive eligibility terminations, with one affected claim as the unit, a rebill rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-7/how-often-does-a-retroactive-eligibility-termination-require-a-claim-rebill.webp",
    "heroImage": "/images/november-7/how-often-does-a-retroactive-eligibility-termination-require-a-claim-rebill.webp",
    "readingMinutes": 14,
    "keyStats": [
      "The unit is one claim with a date of service inside a termination window.",
      "A rebill is counted only when a corrected or new claim is actually submitted.",
      "Pending and unsubmitted claims are reported as separate outcomes."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a retroactive eligibility termination leads to a claim rebill. The question is useful because a termination notice can produce several outcomes: a rebill to another payer, a patient responsibility review, an appeal, a write-off, or no change at all. The review measures the share that actually required a new claim, not the share that someone discussed. It describes the affected claims in one practice and one notice window. It does not determine whether the termination itself was correct.\n\nThe scope should name the payers, plan types, and service dates included in the review. Include claims that were paid, denied, pending, and never submitted, but report those states separately. State whether a corrected claim and a brand-new claim both count as a rebill, or whether they are different categories. Decide how to handle a claim that straddles the effective date. Write the rules before pulling the claim list.\n\nKeep the review administrative. The team can measure what happened to the claim, but it should not decide whether the patient is eligible or whether a service is covered. Those questions belong with the payer or the qualified reviewer. The protocol can show that a rebill was prepared and submitted, not that the new claim will be paid. That distinction keeps the result honest."
      ],
      [
        "Population and unit of analysis",
        "The unit is one claim with a date of service inside the termination window. If a claim has multiple service dates and only some fall inside the window, decide in advance whether it counts once or once per affected date. Counting once keeps the claim count simple, while counting per date may better reflect the work. Choose the approach that matches the decision the report will support. Apply it consistently and write it down.\n\nThe population is every claim that meets the scope, not only the claims that were rebilled. Claims with no action are part of the denominator because they show the other possible outcomes. If a claim cannot be linked to a termination notice, mark it unverifiable and report the count. The reviewer should be able to rebuild the population from the termination notice, the claim system, and the rebill log.\n\nSeparate the notice review from the claim decision in the case record. The notice review confirms the dates and the affected member, while the claim decision records the chosen outcome. Combining them makes it hard to see which step is late. Give each step a date and an owner. A reviewer should be able to tell whether the delay is in intake or in the decision."
      ],
      [
        "Definitions and measures",
        "A rebill means a corrected claim or a new claim was actually submitted after the termination review. A planned rebill that was never submitted is not a rebill for this measure. A patient responsibility review is a separate outcome, even if it later leads to a new claim. An appeal is also separate unless the payer instructs the practice to treat it as a replacement. Define each outcome with an example and use the same categories for every claim.\n\nThe primary measure is the number of claims with a submitted rebill divided by all eligible claims. Report the count of each outcome beside the share. Supporting measures can include the median days from notice to rebill, the share of rebills that were accepted, and the share of claims that needed a patient conversation. Keep the measures on the same claim. A share without the outcome mix can make the workflow look simpler than it is."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim identifier, the patient identifier, the payer, the date of service, the termination effective date, the notice date, the outcome, and the rebill claim identifier when one exists. Record the payer instruction and its reference. If the outcome was a patient responsibility review, record the policy basis and the approver. If the outcome was an appeal, record the filing date and the deadline. The evidence should show why the claim took the path it did.\n\nUse a pseudonymous claim key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the review does not need. Follow the practice privacy and security policies for any export. If the termination notice includes sensitive information, extract only the fields required to match the claim and classify the outcome. The record should be sufficient to repeat the review without exposing more than necessary.\n\nWhen a claim has more than one notice, link each notice to the claim and record the order. A later notice may change the outcome of an earlier review. Do not overwrite the first outcome with the second. Keep the history so the team can see whether the claim was rebilled once, twice, or not at all. That sequence is often more useful than a single status field.\n\nA claim that was never submitted still belongs in the population because it may need a new claim for the correct payer. Record why it was not submitted and whether the termination changed that reason. If the claim was outside the filing limit, note the limit and the date. Do not treat an unsubmitted claim as a zero-work outcome without checking."
      ],
      [
        "Sampling and collection",
        "Use all eligible claims when the notice volume is manageable. If sampling is necessary, draw from the full claim list for the termination window rather than from the claims that were rebilled. A rebill-based sample would answer a different question. Record the sampling frame, method, and exclusions. Stratify by payer or outcome after the overall count is known.\n\nReconcile the termination notices against the claim list before analysis. Missing links should be counted, not dropped. Have a second reviewer recheck a small sample of outcomes against the payer instruction and the rebill log. Record disagreements and resolve them with the written rule. If the rule cannot resolve a disagreement, revise it for the next window rather than changing the current classification."
      ],
      [
        "Analysis and reporting",
        "Report the eligible claim count and the count for each outcome: submitted rebill, patient responsibility review, appeal, write-off, no action, and unverifiable. Show the rebill share with its denominator and the observation window. Group the results by payer and by plan type. A high rebill share for one payer may point to a notice pattern, while a high no-action share may point to a review gap. Do not present the share as a measure of patient eligibility.\n\nUse the findings to decide whether the team needs a clearer notice intake, a faster claim review, or a better handoff to patient financial services. Record the change and the date the team will compare the next window. If the rebill process is slow, measure the step where it waits. A single share is a starting point, not the whole review.\n\nReview the outcomes by payer and by notice date. A cluster of notices with the same effective date may point to a plan change, while a cluster from one sender may point to a data problem. Share the pattern with the eligibility team. Ask for one change to the notice intake or the claim match. Track whether the next window shows the same pattern."
      ],
      [
        "Limitations and use",
        "The count depends on the completeness of the notice and claim records and on the practice's ability to match them. A notice that arrives late may be missing from the window even though the claim is affected. A payer may also change its instruction during the review, which can make an earlier outcome look wrong. These limits should be stated with the result. Use the review to improve the response process, not to make a coverage or eligibility determination.\n\nThis protocol is administrative workflow research, not a legal, clinical, coding, or compliance determination. It does not establish whether a termination was valid or whether a claim should be paid. Review any workflow change with the billing lead and the qualified owner before adoption. Keep the notices, the claim records, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "CMS Provider Enrollment",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers"
      },
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Medicare Coverage Basics",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/basics/get-started-with-medicare"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "how-often-do-provider-directory-listings-disagree-with-enrollment-records",
    "title": "How often do provider directory listings disagree with enrollment records?",
    "cluster": "measurement",
    "topic": "provider directory accuracy",
    "publishedAt": "2026-11-07",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for provider directory accuracy, with one provider-payer-location listing as the unit, field-level comparison, and explicit limits for practices.",
    "thumbnail": "/images/november-7/how-often-do-provider-directory-listings-disagree-with-enrollment-records.webp",
    "heroImage": "/images/november-7/how-often-do-provider-directory-listings-disagree-with-enrollment-records.webp",
    "readingMinutes": 14,
    "keyStats": [
      "The unit is one provider, payer, and location listing.",
      "A disagreement requires a documented difference in a defined field.",
      "A missing listing is reported separately from a wrong listing."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a provider directory listing disagrees with the practice's current enrollment record. The comparison covers the fields patients use to find and contact a provider, such as the name, specialty, location, phone number, and accepting-new-patients status. The result describes the sampled listings in one practice and one set of payer directories. It does not measure the accuracy of every directory in the market or the quality of a provider's care.\n\nThe scope should name the payers, locations, and provider types included in the review. Decide whether each provider-payer pair counts once or once per location. Include listings that are missing entirely, but report them separately from listings that exist and disagree. State whether the review covers the public directory, the payer's provider search, or both. Write the scope before the first comparison so the denominator is stable.\n\nKeep the review administrative. The team can compare published fields with the enrollment record, but it should not decide whether a provider is clinically qualified or whether a network contract is correct. Those questions belong with credentialing and the payer. The protocol measures whether the public information matches the practice's source. That is a narrow and useful question."
      ],
      [
        "Population and unit of analysis",
        "The unit is one provider, payer, and location listing in the sampled directory. If a provider appears in two locations for the same payer, count two listings unless the team decides in advance that the primary location is the only one. A provider with no listing is a separate unit and should be counted as missing. Apply the rule consistently across payers. The unit should match the listing a patient would actually see.\n\nThe population is every listing in the scope, not only the listings that looked wrong during a spot check. A spot-check sample may be useful for planning, but it should not replace the defined population. If a directory cannot be accessed or a field cannot be read, mark the listing unverifiable and report the count. The reviewer should be able to rebuild the population from the payer directory and the enrollment roster.\n\nRecord the directory's last updated date when it is shown. An old date does not prove the field is wrong, but it is useful context for the review. A directory that updates monthly may look stale between cycles even when the practice submitted a timely correction. Note the expected update cycle in the report so a slow publication is not mistaken for a missing request."
      ],
      [
        "Definitions and measures",
        "A disagreement means a defined field in the directory differs from the current enrollment record, and the difference is supported by saved evidence. A formatting difference alone is not a disagreement unless it changes how a patient would find or contact the provider. A missing listing means the provider does not appear where the enrollment record says the listing should be. A wrong listing means the provider appears but a field is incorrect. Keep those categories separate and define each with an example.\n\nThe primary measure is the number of listings with at least one field disagreement divided by all eligible listings. Report field-level counts as well, because a phone number error and an accepting-new-patients error have different consequences. Supporting measures can include the share of missing listings, the share corrected within a stated window, and the median days from request to publication. Keep the measures tied to the same listing."
      ],
      [
        "Evidence standard",
        "Each unit needs the provider name, the payer, the location, the directory URL or identifier, the enrollment source, the field values from both sources, and the date checked. Save a screenshot or a saved page that shows the directory field and the date. A screenshot without the provider and location is weak evidence. Record who performed the comparison and who confirmed the enrollment value. The evidence should let another reviewer repeat the field comparison.\n\nUse a pseudonymous listing key in the analysis file and keep the crosswalk in an approved system. Do not copy sensitive provider information that the review does not need. Follow the practice privacy and security policies for any export. If the directory shows a field that the enrollment record does not track, mark it out of scope rather than forcing a comparison. The protocol should measure what both sources can support.\n\nWhen a correction is submitted, keep the request date, the case number, and the confirmation. A submitted request is not a corrected listing. Check the public page again before marking the item resolved. If the directory updates slowly, record the expected publication date and keep the item open. That distinction prevents the team from reporting a fix that patients cannot see.\n\nCompare the most patient-sensitive fields first when time is limited. A wrong phone number or a closed location affects access immediately, while a missing language field may be less urgent. Use a simple priority order and apply it in every review. The order should be written down so the team does not relitigate it each cycle. Prioritization keeps a large roster manageable.\n\nKeep the correction evidence with the listing record, not in a separate inbox. A reviewer should see the original value, the requested value, and the confirmation in one place. If the directory vendor asks for a specific format, save that instruction too. The next correction will be faster. The record also shows whether the same field keeps drifting."
      ],
      [
        "Sampling and collection",
        "Use all eligible listings when the roster is small enough to review. If sampling is necessary, draw from the enrollment roster rather than from the listings that already look wrong. A sample built from complaints will overstate the disagreement rate. Stratify by payer, location, or provider type after the overall count is known. Record the sampling method, the frame, and every exclusion.\n\nCollect the directory value and the enrollment value on the same day when possible. A field can change between the two checks and create a false disagreement. Have a second reviewer recheck a small sample of listings. Record disagreements and resolve them with the written rule. If the rule cannot resolve a disagreement, revise it for the next window rather than changing the current classification."
      ],
      [
        "Analysis and reporting",
        "Report the eligible listing count, the disagreement count, the missing count, and the unverifiable count. Show the disagreement share with its denominator and the observation window. Break the results out by field, payer, and location. A phone number problem in one location is different from an accepting-new-patients problem across a payer. Show the correction status beside each finding so the report distinguishes a known issue from a resolved one.\n\nUse the findings to decide whether the practice needs a directory owner, a pre-change checklist, or a payer escalation. Record the change and the date the team will compare the next review. If one payer is consistently slow to update, document the dates and the case numbers. A factual trail is more useful than a general complaint. The review should end with one action and one owner.\n\nReport the count of listings that were corrected and then drifted back within the review period. A recurring drift is a workflow problem, not a one-time data error. Name the owner and the interval for the next check. That small measure can be more useful than a large accuracy percentage."
      ],
      [
        "Limitations and use",
        "The count depends on the accuracy of the enrollment record and the accessibility of the directory. An enrollment record can itself be out of date, which makes the comparison a test of two sources rather than one truth. A directory may cache an old page even after a correction is accepted. These limits should be stated with the result. Use the review to improve the listing workflow, not to make a network or credentialing determination.\n\nThis protocol is administrative workflow research, not a legal, clinical, coding, or compliance determination. It does not establish whether a provider is in network or whether a directory meets a regulatory standard. Review any workflow change with the billing lead and the credentialing owner before adoption. Keep the directory evidence, the enrollment source, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "CMS Provider Enrollment",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers"
      },
      {
        "label": "CMS PECOS",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers/chain-ownership-system-pecos"
      },
      {
        "label": "Health IT Interoperability",
        "publisher": "Office of the National Coordinator for Health IT",
        "url": "https://www.healthit.gov/topic/interoperability"
      },
      {
        "label": "CMS Administrative Simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ]
  }
];
