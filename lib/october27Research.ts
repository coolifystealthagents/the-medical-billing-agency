export const october27Research = [
  {
    "slug": "themedicalbillingagency-auditing-access-changes-around-payment-posting",
    "title": "Auditing access changes around payment posting",
    "cluster": "access",
    "topic": "Auditing access changes around payment posting",
    "publishedAt": "2026-10-27",
    "sourceCount": 4,
    "excerpt": "A grounded medical billing note for billing company owners: payment posting with explicit evidence, decision rights, and a verified close.",
    "thumbnail": "/images/october-27/themedicalbillingagency-auditing-access-changes-around-payment-posting.png",
    "keyStats": [
      "A grounded medical billing note for billing company owners: payment posting with explicit evidence, decision rights, and a verified close.",
      "4 public sources documented",
      "One reproducible review protocol"
    ],
    "sections": [
      [
        "Question and scope",
        "A useful scope is narrow enough to reproduce and specific enough to show whether posting mismatch is being detected. Exclude a reopened case only when the reopening did not create a new requirement; keep the exclusion count and reason. Write the primary measure and one supporting measure; a measure without a denominator or observation window is not ready. Separate the operational question from the compliance question; this method does not certify either outcome. Link the observation to the exact field in the denial queue and to the claim intake that supports it. A useful scope is narrow enough to reproduce and specific enough to show whether credential expiry is being detected. If the population is too small to sample, say so and report the complete set rather than implying a larger study. Distinguish an administrative pause from a failure: a pause waits for a named decision, while a failure leaves the next action unowned. Record the exclusions in advance so a difficult case cannot be removed after the result is known. Do not let a summary written later replace the evidence that was available at the first decision."
      ],
      [
        "Population and unit",
        "Record how duplicate requests were matched, merged, or kept separate, because that choice changes the denominator. A case that moves between owners stays one case unless the process defines a new requirement at the handoff. A correction should be classified by the original case and by the correction event, with both dates retained. Report a case that moved between owners as one case with two owner periods unless the process creates a new requirement. If the case moved between owners, include both owner periods in the review note and name the handoff time. Test the unit definition on a case that crosses owners, a case that is still open, and a case that was reopened. A case that moves between owners stays one case unless the process defines a new requirement at the handoff. The start event should be the first recorded request, not the first time the team opened the case. Keep a list of requests closed as duplicates and show which case survived. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      ],
      [
        "Definitions and measures",
        "A pause should have a reason, an owner, and a review date; otherwise it is an unowned case with a different label. Define allowed values for status, reason, owner, and evidence state before collection. Use the same status vocabulary in the queue, the evidence extract, and the report so a case does not change category. Write the start and stop events as observable actions, not as opinions about whether the work felt finished. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract. Name the owner who can declare a case complete, and record that role in the data dictionary. Test the data dictionary on a small set of cases and revise ambiguous fields before the main sample. Define whether a case that waits for a third party is open, paused, or excluded, and apply that rule to every owner. Keep a change log for every definition adjustment and the date it took effect. At The Medical Billing Agency, the payment posting review should end with a dated note and a named owner for the next check."
      ],
      [
        "Data dictionary and evidence",
        "If the source is a document, record the page or field; if the source is a system, record the record identifier and extraction time. Use a controlled list for exception reasons; do not let free text become the analysis category. Run a five-case pilot before the full sample and revise any field that two reviewers interpret differently. Pilot the dictionary with two reviewers and compare their classifications before the main sample. If the evidence is sensitive, record the approved reference and access path rather than copying the content. Record the version or date of the coding audit and the clearinghouse value so a later reviewer can see what was known at the first action. Test the dictionary on a case with a missing coding audit and a case with a corrected value. Keep the original evidence reference next to the coded value so the reviewer can verify the classification. Use a separate field for reviewer notes so the coded values stay comparable. The note should distinguish what was observed, what was inferred, and what still needs an owner decision. The data dictionary should name the allowed values for status, exception reason, owner, and close evidence. Name the required fields for each article type and mark conditional fields in the dictionary. Store sensitive evidence in the approved repository and keep only the reference in the analysis file. Keep the original request, the approval, and the destination value linked to the same key. Record this decision in the study log with the case key, the review date, and the person who approved the classification."
      ],
      [
        "Sampling and collection",
        "If the population is small, report every case and the reason the sample is exhaustive rather than presenting a false precision. Use the same collection form for every case and keep the original record linked to the extracted fields. If a stratum has fewer cases than planned, report the smaller count instead of replacing it with a convenience case. Record the sampling frame as an export with a date, filter, and row count. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue. Use a random or systematic start rule for the first case, then take consecutive cases within each stratum. A second reviewer should re-extract a small subsample and record disagreements before the full analysis. Do not expand the sample only because the early result looks weak or strong. Include at least one case from each owner in scope when the frame allows it. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it. Include adverse cases: a missing claim intake, a conflicting source, an unavailable provider, and a tight deadline. Do not clean the data by filling missing values; preserve the missing state and report it as a result. Include reopened, unresolved, and exception cases in the sample frame. A case that is difficult to access is still part of the frame; report the access failure rather than replacing it silently. At The Medical Billing Agency, the reviewer should be able to explain this step to provider from the case record alone."
      ],
      [
        "Analysis and reporting",
        "Compare denial age across owners only after checking the case mix, the channel, and the evidence standard. A small sample should be reported with the number of cases that drive the result. Use a simple before-and-after comparison only when the definitions and observation window are the same. Report the number of cases that drive a small-sample result and the direction of the effect. Use the same note in the case file and the study extract; do not create a second version in a personal document. A difference between two periods is a signal to inspect, not proof that a process change caused the change. Use case-level review to explain an outlier before treating it as a process signal. Write the finding in plain language and separate what was observed from what the team believes caused it. End with the decision the evidence supports and the decision it does not support. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      ],
      [
        "Limitations",
        "Selection bias remains if the team samples only records that are easy to open or cases handled by cooperative owners. Changes in staffing, access, or the denial queue during the window can create a difference that is not a process effect. If the reviewer also performed the work, note the independence limitation and use a second reviewer for a subsample. Report the limits of the denial queue data, including fields that were unavailable or changed. Keep the measurement note short enough to read with the case and specific enough to support the reported posting accuracy. The record may be incomplete, delayed, or maintained outside the team, so the method cannot infer missing work from a clean summary. Changes in staffing, access, or the payment posting system during the window can create a difference that is not a process effect. If the queue changed during the window, explain how the change affects the denominator and the interpretation. Record the access problems that prevented a case from being reviewed. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      ],
      [
        "Review and next action",
        "Record the decision and the next check so the study does not end as an archive. If the action changes credential expiry, record the approval from provider before implementation. Close the review only when the owner has accepted the result and the next check is scheduled. Keep the prior procedure available so the next reviewer can compare the old and new states. Link the observation to the exact field in the payment posting system and to the eligibility check that supports it. A quality review should end with an owner, a date, and one testable change, not a list of intentions. If the action changes stale payer record, record the approval from patient before implementation. Close the review only when the owner has accepted the result and the next check is scheduled. If the action needs approval, record the approver and the date before the change is applied. Do not let a summary written later replace the evidence that was available at the first decision."
      ]
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "nist.gov",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Centers for Medicare and Medicaid Services",
        "publisher": "cms.gov",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "publisher": "hhs.gov",
        "url": "https://www.hhs.gov/hipaa/index.html"
      },
      {
        "label": "American Medical Association",
        "publisher": "ama-assn.org",
        "url": "https://www.ama-assn.org/"
      }
    ]
  },
  {
    "slug": "themedicalbillingagency-estimating-rework-in-denial-queue-from-correction-and-reopen-records",
    "title": "Estimating rework in denial queue from correction and reopen records",
    "cluster": "cost",
    "topic": "Estimating rework in denial queue from correction and reopen records",
    "publishedAt": "2026-10-27",
    "sourceCount": 4,
    "excerpt": "A grounded medical billing note for billing company owners: denial queue with explicit evidence, decision rights, and a verified close.",
    "thumbnail": "/images/october-27/themedicalbillingagency-estimating-rework-in-denial-queue-from-correction-and-reopen-records.png",
    "keyStats": [
      "A grounded medical billing note for billing company owners: denial queue with explicit evidence, decision rights, and a verified close.",
      "4 public sources documented",
      "One reproducible review protocol"
    ],
    "sections": [
      [
        "Question and scope",
        "State the observation window, the sites or teams included, and the exclusions before collecting the first case. If the population is too small to sample, say so and report the complete set rather than implying a larger study. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. Name the population, the observation window, and the systems included in the extraction. Keep the measurement note short enough to read with the case and specific enough to support the reported eligibility completion. Write the primary question and one supporting question, then stop; a long list of questions usually hides an undefined unit. The population should include cases handled by every owner and channel in scope, not only the queue with the cleanest records. Distinguish an administrative pause from a failure: a pause waits for a named decision, while a failure leaves the next action unowned. Record the exclusions in advance so a difficult case cannot be removed after the result is known. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      ],
      [
        "Population and unit",
        "A population that changes size during the day should be reported with the start, end, and net change, not only the closing total. A denominator that changes during the window should be reported separately for each period. The definition should make it possible to classify a case without asking the person who did the work. A case that never received an owner still belongs in the population; do not drop it because it is difficult to classify. Link the observation to the exact field in the denial queue and to the patient statement that supports it. When several claim intake updates belong to one request, state whether the request or each update is the unit and apply that rule consistently. Record the queue at the start and end of each observation day so additions and withdrawals are visible. A correction should be classified by the original case and by the correction event, with both dates retained. Keep a list of requests closed as duplicates and show which case survived. Do not let a summary written later replace the evidence that was available at the first decision."
      ],
      [
        "Definitions and measures",
        "A pause should have a reason, an owner, and a review date; otherwise it is an unowned case with a different label. Record the version of the claim intake and the payment posting system snapshot used for each case. If a case is outside the scope rule, record the rule and the date of exclusion rather than removing it silently. Record the pause rule and the person authorized to release a paused case. If the case moved between owners, include both owner periods in the review note and name the handoff time. Measure elapsed time from the first recorded request to the verified destination update, and report waiting intervals separately. A blank field, a not-applicable field, and a confirmed negative field should have different codes. If a case is outside the scope rule, record the rule and the date of exclusion rather than removing it silently. Keep a change log for every definition adjustment and the date it took effect. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      ],
      [
        "Data dictionary and evidence",
        "Each case needs the source, the observation time, the field supported, the owner, and the reviewer. If a field is derived, record the formula and the source fields used to calculate it. Keep the source reference and the coded value in the same row, and do not overwrite the original with a later correction. Keep the original request, the approval, and the destination value linked to the same key. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract. Test the dictionary on five cases before the full sample; ambiguous fields should be fixed before collection, not after. Version the dictionary and report which version was used for each observation period. Run a five-case pilot before the full sample and revise any field that two reviewers interpret differently. Archive the dictionary with the study so a later reviewer can reproduce the categories. At The Medical Billing Agency, the denial queue review should end with a dated note and a named owner for the next check. Record the version or date of the payment posting and the clearinghouse value so a later reviewer can see what was known at the first action. Test the dictionary on a case with a missing payment posting and a case with a corrected value. Record the source identifier, the field name, the observation time, and the reviewer for every extracted value. Do not use a zero or an empty string to represent missing evidence. If the evidence is sensitive, record the approved reference and access path rather than copying the content."
      ],
      [
        "Sampling and collection",
        "Stop expanding the sample only when the review question is answered, not when the result starts to look favorable. Keep the collection window and the number of collectors in the report; both affect how the result should be interpreted. Stratify by risk, channel, and owner so the sample is not dominated by the easiest queue. Use a random start and a fixed interval when the frame is ordered, and record both. The note should distinguish what was observed, what was inferred, and what still needs an owner decision. If the population is small, report every case and the reason the sample is exhaustive rather than presenting a false precision. Record the time of each observation so a later reviewer can distinguish a late entry from a changed decision. Do not expand the sample only because the early result looks weak or strong. Keep a table of planned, eligible, selected, and reviewed counts for each stratum. Record this decision in the study log with the case key, the review date, and the person who approved the classification. Include adverse cases: a missing coding audit, a conflicting source, an unavailable billing company owner, and a tight deadline. Use the same collection form for every case and keep the original record linked to the extracted fields. Record the eligible count and every exclusion before the sample is drawn. Do not let the reviewer choose the sample after seeing the results. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue."
      ],
      [
        "Analysis and reporting",
        "A difference between two periods is a signal to inspect, not proof that a process change caused the change. Compare periods only after checking the case mix, the definitions, and the queue rules. Use a simple before-and-after comparison only when the definitions and observation window are the same. Show the age distribution and the open-case count by owner, not only the mean. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it. Separate observation from interpretation; a high completion rate on a small easy sample is not evidence of a strong control. A small sample should be reported with the number of cases that drive the result. Keep the case-level table available for review and summarize only the measures that answer the question. Report the number of cases that drive a small-sample result and the direction of the effect. At The Medical Billing Agency, the reviewer should be able to explain this step to provider from the case record alone."
      ],
      [
        "Limitations",
        "Report what remains unknown and what evidence would be needed to answer the next question. A clean summary can hide missing evidence, especially when the operator who did the work is also the reviewer. Do not treat a missing record as proof that the work did not happen; it is evidence about the record. A missing record is evidence about the record, not proof that the work was never done. Use the same note in the case file and the study extract; do not create a second version in a personal document. The study cannot determine whether the professional decision was correct, only whether the record and handoff are reconstructable. Small samples are unstable; report the range and the cases that create the variation. If the queue changed during the window, explain how the change affects the denominator and the interpretation. State what a follow-up study would measure and which population it would include. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      ],
      [
        "Review and next action",
        "A quality review should end with an owner, a date, and one testable change, not a list of intentions. Report what moved, what stayed the same, and what the study still cannot explain. Report the action result even if the change did not work; a failed test is still evidence. If the action needs approval, record the approver and the date before the change is applied. Keep the measurement note short enough to read with the case and specific enough to support the reported credential expiry count. Keep the review note with the denial queue evidence so the next reviewer can see why the process changed. A quality review should end with a testable next step, not a general instruction to improve. If the action requires a policy or access change, route it to the owner and record the decision. Link the action to the case evidence that prompted it, not only to the meeting notes. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      ]
    ],
    "sources": [
      {
        "label": "American Medical Association",
        "publisher": "ama-assn.org",
        "url": "https://www.ama-assn.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "nist.gov",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Centers for Medicare and Medicaid Services",
        "publisher": "cms.gov",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "publisher": "hhs.gov",
        "url": "https://www.hhs.gov/hipaa/index.html"
      }
    ]
  },
  {
    "slug": "themedicalbillingagency-measuring-cycle-time-for-claim-intake-from-request-to-verified-close",
    "title": "Measuring cycle time for claim intake from request to verified close",
    "cluster": "measurement",
    "topic": "Measuring cycle time for claim intake from request to verified close",
    "publishedAt": "2026-10-27",
    "sourceCount": 4,
    "excerpt": "A grounded medical billing note for billing company owners: claim intake with explicit evidence, decision rights, and a verified close.",
    "thumbnail": "/images/october-27/themedicalbillingagency-measuring-cycle-time-for-claim-intake-from-request-to-verified-close.png",
    "keyStats": [
      "A grounded medical billing note for billing company owners: claim intake with explicit evidence, decision rights, and a verified close.",
      "4 public sources documented",
      "One reproducible review protocol"
    ],
    "sections": [
      [
        "Question and scope",
        "The study measures the record and the handoff, not the professional judgment of billing company owner or the legal outcome of the work. The population should include cases handled by every owner and channel in scope, not only the queue with the cleanest records. A case is complete only when the practice management system shows the approved destination value and the claim intake supports it. Separate the operational question from the compliance question; this method does not certify either outcome. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it. Write the primary question and one supporting question, then stop; a long list of questions usually hides an undefined unit. State how duplicate requests are identified and whether they are merged, linked, or counted separately. Record how corrections, reopens, and duplicate requests are treated so denial age cannot be inflated by reclassification. Separate the operational question from the compliance question; this method does not certify either outcome. At The Medical Billing Agency, the reviewer should be able to explain this step to provider from the case record alone."
      ],
      [
        "Population and unit",
        "Record the opening count by owner and channel, because a single total can hide a queue concentrated in one person. Exclude cases opened outside the window only when the exclusion rule was written before collection. The definition should make it possible to classify a case without asking the person who did the work. If the queue was archived during the window, report the loss and exclude the affected period rather than assuming the cases were resolved. Use the same note in the case file and the study extract; do not create a second version in a personal document. Include cases opened before the window but closed inside it only when the protocol says they belong to the population. Exclude cases opened outside the window only when the exclusion rule was written before collection. The stop event should be the verified destination update, not the last message in the thread. If a request was reopened after the window, keep it in the original population and report the later event separately. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      ],
      [
        "Definitions and measures",
        "Test each definition on a routine case, a missing-evidence case, and a case that crossed owners. Record the source system, the record identifier, the extraction time, and the reviewer for every extracted value. Record the person who approved the definition and the date it became effective. State how duplicate, cancelled, and reopened cases enter the numerator and denominator. Keep the measurement note short enough to read with the case and specific enough to support the reported credential expiry count. Test each definition on a routine case, a missing-evidence case, and a case that crossed owners. Do not store sensitive content in the analysis file when a reference to the approved repository is enough. Record the person who approved the definition and the date it became effective. Record the pause rule and the person authorized to release a paused case. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      ],
      [
        "Data dictionary and evidence",
        "Mark missing, unavailable, and confirmed negative values separately; collapsing them hides the difference between no evidence and evidence of absence. Keep the identity crosswalk in the approved system and restrict it to the review owner. Use one row per case and one column per required field; do not bury evidence in a long free-text note. Do not use a zero or an empty string to represent missing evidence. Link the observation to the exact field in the denial queue and to the payment posting that supports it. Keep free-text notes separate from coded fields so the analysis does not depend on inconsistent wording. Record the extraction time separately from the event time so a late entry is visible. Keep the source reference and the coded value in the same row, and do not overwrite the original with a later correction. Do not use a zero or an empty string to represent missing evidence. Do not let a summary written later replace the evidence that was available at the first decision. Test the dictionary on five cases before the full sample; ambiguous fields should be fixed before collection, not after. Name the required fields for each article type and mark conditional fields in the dictionary. Store sensitive evidence in the approved repository and keep only the reference in the analysis file. Archive the dictionary with the study so a later reviewer can reproduce the categories. If the case moved between owners, include both owner periods in the review note and name the handoff time."
      ],
      [
        "Sampling and collection",
        "Sample across the full observation window, including the days when the queue was busiest and the days when coverage changed. Use the same collection form for every case and keep the original record linked to the extracted fields. Do not expand the sample only because the early result looks weak or strong. Keep a table of planned, eligible, selected, and reviewed counts for each stratum. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory. Include adverse cases: a missing patient statement, a conflicting source, an unavailable provider, and a tight deadline. Record the time of each observation so a later reviewer can distinguish a late entry from a changed decision. Record the eligible count and every exclusion before the sample is drawn. Include at least one case from each owner in scope when the frame allows it. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract. Use a random or systematic start rule for the first case, then take consecutive cases within each stratum. Use the same collection form for every case and keep the original record linked to the extracted fields. Use a random or systematic start rule and then take consecutive cases within each stratum. Include at least one case from each owner in scope when the frame allows it. At The Medical Billing Agency, the claim intake review should end with a dated note and a named owner for the next check."
      ],
      [
        "Analysis and reporting",
        "A difference between two periods is a signal to inspect, not proof that a process change caused the change. Keep descriptive findings separate from causal claims. Show the unresolved cases by owner, age, and dependency instead of reporting a single completion percentage. Report the number of cases that drive a small-sample result and the direction of the effect. If the evidence is sensitive, record the approved reference and access path rather than copying the content. Separate observation from interpretation; a high completion rate on a small easy sample is not evidence of a strong control. Use case-level review to explain an outlier before treating it as a process signal. Write the finding in plain language and separate what was observed from what the team believes caused it. Keep descriptive findings separate from causal claims and label exploratory results. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      ],
      [
        "Limitations",
        "The study cannot determine whether the professional decision was correct, only whether the record and handoff are reconstructable. The study cannot determine whether a professional judgment was correct, only whether the record supports it. If the reviewer also performed the work, note the independence limitation and use a second reviewer for a subsample. A missing record is evidence about the record, not proof that the work was never done. Record this decision in the study log with the case key, the review date, and the person who approved the classification. Selection bias remains if the team samples only records that are easy to open or cases handled by cooperative owners. A clean summary can hide missing evidence, especially when the operator who did the work is also the reviewer. Do not treat a missing record as proof that the work did not happen; it is evidence about the record. A missing record is evidence about the record, not proof that the work was never done. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue."
      ],
      [
        "Review and next action",
        "Name the owner who will read the result and set a review date before the sample is collected. Keep the review note with the claim intake evidence so the next owner can see why the process changed. Choose a measure that can move within one cycle and a second measure that checks for unintended effects. Close the review when the owner accepts the finding and the next test is on the calendar. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it. Record the decision and the next check so the study does not end as an archive. If the action changes coding error, record the approval from payer representative before implementation. Link the action to the specific claim intake cases that motivated it. If the action needs approval, record the approver and the date before the change is applied. At The Medical Billing Agency, the reviewer should be able to explain this step to payer representative from the case record alone."
      ]
    ],
    "sources": [
      {
        "label": "Centers for Medicare and Medicaid Services",
        "publisher": "cms.gov",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "publisher": "hhs.gov",
        "url": "https://www.hhs.gov/hipaa/index.html"
      },
      {
        "label": "American Medical Association",
        "publisher": "ama-assn.org",
        "url": "https://www.ama-assn.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "nist.gov",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  },
  {
    "slug": "themedicalbillingagency-testing-evidence-completeness-in-eligibility-check-without-a-convenience-sample",
    "title": "Testing evidence completeness in eligibility check without a convenience sample",
    "cluster": "quality",
    "topic": "Testing evidence completeness in eligibility check without a convenience sample",
    "publishedAt": "2026-10-27",
    "sourceCount": 4,
    "excerpt": "A grounded medical billing note for billing company owners: eligibility check with explicit evidence, decision rights, and a verified close.",
    "thumbnail": "/images/october-27/themedicalbillingagency-testing-evidence-completeness-in-eligibility-check-without-a-convenience-sample.png",
    "keyStats": [
      "A grounded medical billing note for billing company owners: eligibility check with explicit evidence, decision rights, and a verified close.",
      "4 public sources documented",
      "One reproducible review protocol"
    ],
    "sections": [
      [
        "Question and scope",
        "The scope is one defined population of eligibility check cases observed from first request through verified close in the clearinghouse. The unit definition should be stable enough that two reviewers can classify the same case the same way. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. If the study is exploratory, label it exploratory and do not present the result as a stable baseline. Use the same note in the case file and the study extract; do not create a second version in a personal document. The scope is one defined population of eligibility check cases observed from first request through verified close in the EHR. If one request produces several payment posting updates, define whether the unit is the request or each update before sampling. Distinguish an administrative pause from a failure: a pause waits for a named decision, while a failure leaves the next action unowned. The protocol should be short enough for an operator to follow and specific enough for a reviewer to repeat. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      ],
      [
        "Population and unit",
        "When several payment posting updates belong to one request, state whether the request or each update is the unit and apply that rule consistently. Exclude cases opened outside the window only when the exclusion rule was written before collection. The start event should be the first recorded request, not the first time the team opened the case. If the queue was archived during the window, report the loss and exclude the affected period rather than assuming the cases were resolved. Keep the measurement note short enough to read with the case and specific enough to support the reported posting accuracy. A population that changes size during the day should be reported with the start, end, and net change, not only the closing total. Report the number of cases that could not be classified and the reason, rather than forcing them into a category. The definition should make it possible to classify a case without asking the person who did the work. Keep a list of requests closed as duplicates and show which case survived. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      ],
      [
        "Definitions and measures",
        "A case that has no destination change should be defined as cancelled or rejected, not counted as complete. Test the data dictionary on a small set of cases and revise ambiguous fields before the main sample. Use the same status vocabulary in the queue, the evidence extract, and the report so a case does not change category. Write the start and stop events as observable actions, not as opinions about whether the work felt finished. Link the observation to the exact field in the denial queue and to the coding audit that supports it. Define how a correction after close is linked to the original case and whether it creates a new case. Use a stable case key and a separate identity crosswalk stored in an approved system. Use the same status vocabulary in the queue, the evidence extract, and the report so a case does not change category. Write the start and stop events as observable actions, not as opinions about whether the work felt finished. Do not let a summary written later replace the evidence that was available at the first decision."
      ],
      [
        "Data dictionary and evidence",
        "Test the dictionary on five cases before the full sample; ambiguous fields should be fixed before collection, not after. Give every case a study key that is not the client name, member number, or candidate email. A missing value should have a reason code, not a blank cell or a zero. Keep the original request, the approval, and the destination value linked to the same key. If the case moved between owners, include both owner periods in the review note and name the handoff time. Mark missing, unavailable, and confirmed negative values separately; collapsing them hides the difference between no evidence and evidence of absence. Give every case a study key that is not the client name, member number, or candidate email. Record the data extraction date and the version of the credential tracker used for the population count. Record the source location, not just the file name, so a reviewer can reopen the exact evidence. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory. Each case needs the source, the observation time, the field supported, the owner, and the reviewer. Test the dictionary on a case with a missing eligibility check and a case with a corrected value. Keep the source reference and the coded value in the same row, and do not overwrite the original with a later correction. Record the source location, not just the file name, so a reviewer can reopen the exact evidence. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract."
      ],
      [
        "Sampling and collection",
        "Use consecutive eligibility check cases where possible, then stratify by owner, channel, and risk class. Record the time of each observation so a later reviewer can distinguish a late entry from a changed decision. Stratify by risk, channel, and owner so the sample is not dominated by the easiest queue. If a selected case is out of scope, replace it only with the next case in the same stratum and record the substitution. At The Medical Billing Agency, the eligibility check review should end with a dated note and a named owner for the next check. Sample across the full observation window, including the days when the queue was busiest and the days when coverage changed. A second reviewer should re-extract a small subsample and record disagreements before the full analysis. Keep the sample selection reproducible by recording the export date, filter, and random seed or start rule. Use a random start and a fixed interval when the frame is ordered, and record both. If the evidence is sensitive, record the approved reference and access path rather than copying the content. Use a random or systematic start rule for the first case, then take consecutive cases within each stratum. Record the time of each observation so a later reviewer can distinguish a late entry from a changed decision. Do not expand the sample only because the early result looks weak or strong. If a selected case is out of scope, replace it only with the next case in the same stratum and record the substitution. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      ],
      [
        "Analysis and reporting",
        "A difference between two periods is a signal to inspect, not proof that a process change caused the change. Compare periods only after checking the case mix, the definitions, and the queue rules. Show the unresolved cases by owner, age, and dependency instead of reporting a single completion percentage. When a measure is based on a small sample, state the case count and avoid ranking owners by the result. Record this decision in the study log with the case key, the review date, and the person who approved the classification. If the sample is small, report the instability and the cases that drive the result instead of a precise-looking percentage. For eligibility check, report the age distribution and the share of cases waiting on a named owner. When two groups differ, check whether the difference survives after adjusting for case mix and evidence standard. When a rate changes, check whether the case mix or the evidence standard changed at the same time. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue."
      ],
      [
        "Limitations",
        "The study cannot determine whether the professional decision was correct, only whether the record and handoff are reconstructable. Selection bias remains when the team chooses cases that are easy to open or owners who are likely to cooperate. Keep the limitations with the result so a later reader does not turn a local observation into a general claim. If the queue changed during the window, explain how the change affects the denominator. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it. The study cannot determine whether the professional decision was correct, only whether the record and handoff are reconstructable. Small samples are unstable; report the range and the cases that create the variation. Name the follow-up evidence that would reduce the largest uncertainty. State what a follow-up study would measure and which population it would include. At The Medical Billing Agency, the reviewer should be able to explain this step to patient from the case record alone."
      ],
      [
        "Review and next action",
        "Choose one next action: fix the source, simplify the payment posting, change the queue, adjust access, or pause the work until the owner decides. Repeat the protocol with the same definitions and window, then compare the same measures. Choose a measure that can move within one cycle and a second measure that checks for unintended effects. Record the owner, due date, and exact change that will be tested at the next review. Use the same note in the case file and the study extract; do not create a second version in a personal document. Name the owner who will read the result and set a review date before the sample is collected. If the result is inconclusive, say so and choose a narrower question rather than claiming a trend. If the action requires a policy or access change, route it to the owner and record the decision. If the action needs approval, record the approver and the date before the change is applied. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      ]
    ],
    "sources": [
      {
        "label": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "publisher": "hhs.gov",
        "url": "https://www.hhs.gov/hipaa/index.html"
      },
      {
        "label": "American Medical Association",
        "publisher": "ama-assn.org",
        "url": "https://www.ama-assn.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "nist.gov",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Centers for Medicare and Medicaid Services",
        "publisher": "cms.gov",
        "url": "https://www.cms.gov/"
      }
    ]
  },
  {
    "slug": "themedicalbillingagency-testing-whether-coding-audit-monitoring-catches-silent-failures",
    "title": "Testing whether coding audit monitoring catches silent failures",
    "cluster": "monitoring",
    "topic": "Testing whether coding audit monitoring catches silent failures",
    "publishedAt": "2026-10-27",
    "sourceCount": 4,
    "excerpt": "A grounded medical billing note for billing company owners: coding audit with explicit evidence, decision rights, and a verified close.",
    "thumbnail": "/images/october-27/themedicalbillingagency-testing-whether-coding-audit-monitoring-catches-silent-failures.png",
    "keyStats": [
      "A grounded medical billing note for billing company owners: coding audit with explicit evidence, decision rights, and a verified close.",
      "4 public sources documented",
      "One reproducible review protocol"
    ],
    "sections": [
      [
        "Question and scope",
        "State the observation window, the sites or teams included, and the exclusions before collecting the first case. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A case is complete only when the payment posting system shows the approved destination value and the denial record supports it. Write the decision the study is meant to inform before choosing the measure. If the case moved between owners, include both owner periods in the review note and name the handoff time. The question should name the unit, the start event, the stop event, and the decision the result is meant to inform. State how duplicate requests are identified and whether they are merged, linked, or counted separately. The definitions should be short enough to use at the queue and precise enough to defend in a review with provider. State whether the study covers one team, one client, or all cases in the defined service. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      ],
      [
        "Population and unit",
        "Record how duplicate requests were matched, merged, or kept separate, because that choice changes the denominator. Report the number of cases that could not be classified and the reason, rather than forcing them into a category. Use plain language in the definition and add one example and one non-example for the reviewer. Report a case that moved between owners as one case with two owner periods unless the process creates a new requirement. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract. The unit is one coding audit case, from the opening request to the verified close, and linked events stay with that case. If duplicate requests are merged, keep the duplicate count and the merge rule in the dataset. Write the rule for a missing coding audit before the first case so the treatment is consistent. If the queue was archived during the window, report the loss and exclude the affected period rather than assuming the cases were resolved. At The Medical Billing Agency, the coding audit review should end with a dated note and a named owner for the next check."
      ],
      [
        "Definitions and measures",
        "Test each definition on a routine case, a missing-evidence case, and a case that crossed owners. Do not store sensitive content in the analysis file when a reference to the approved repository is enough. Before collection, test the definitions on a missing coding audit, a reopened case, and a handoff. Define whether the measure counts requests, cases, or destination updates, and use that unit consistently. If the evidence is sensitive, record the approved reference and access path rather than copying the content. A case that has no destination change should be defined as cancelled or rejected, not counted as complete. Do not store sensitive content in the analysis file when a reference to the approved repository is enough. If a case is outside the scope rule, record the rule and the date of exclusion rather than removing it silently. Record the pause rule and the person authorized to release a paused case. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      ],
      [
        "Data dictionary and evidence",
        "Use a pseudonymous case key and keep the identity crosswalk in an approved system with restricted access. Use a controlled list for exception reasons; do not let free text become the analysis category. Keep the source reference and the coded value in the same row, and do not overwrite the original with a later correction. Pilot the dictionary with two reviewers and compare their classifications before the main sample. Record this decision in the study log with the case key, the review date, and the person who approved the classification. The data dictionary should name the allowed values for status, exception reason, owner, and close evidence. If a field is derived, record the formula and the source fields used to calculate it. Use one row per case and one column per required field; do not bury evidence in a long free-text note. Archive the dictionary with the study so a later reviewer can reproduce the categories. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue. Record the version or date of the eligibility check and the denial queue value so a later reviewer can see what was known at the first action. Version the dictionary and report which version was used for each observation period. Record the source identifier, the field name, the observation time, and the reviewer for every extracted value. Define who may change a coded value and how the change is logged. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it."
      ],
      [
        "Sampling and collection",
        "If the population is small, report every case and the reason the sample is exhaustive rather than presenting a false precision. A second reviewer should re-extract a small subsample and record disagreements before the full analysis. Record the eligible count and every exclusion before the sample is drawn. A case that is difficult to access is still part of the frame; report the access failure rather than replacing it silently. At The Medical Billing Agency, the reviewer should be able to explain this step to billing company owner from the case record alone. Include adverse cases: a missing eligibility check, a conflicting source, an unavailable provider, and a tight deadline. A second reviewer should re-extract a small subsample and record disagreements before the full analysis. If a stratum has fewer cases than planned, report the smaller count instead of replacing it with a convenience case. Use a random start and a fixed interval when the frame is ordered, and record both. Use the same note in the case file and the study extract; do not create a second version in a personal document. Stop expanding the sample only when the review question is answered, not when the result starts to look favorable. Use the same collection form for every case and keep the original record linked to the extracted fields. Keep the sample selection reproducible by recording the export date, filter, and random seed or start rule. Record the sampling frame as an export with a date, filter, and row count. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      ],
      [
        "Analysis and reporting",
        "State which findings are descriptive and which require a follow-up test with a larger or different sample. Compare periods only after checking the case mix, the definitions, and the queue rules. Keep the case-level table available for review and summarize only the measures that answer the question. When a measure is based on a small sample, state the case count and avoid ranking owners by the result. Keep the measurement note short enough to read with the case and specific enough to support the reported eligibility completion. State which findings are descriptive and which require a follow-up test with a larger or different sample. The analysis should end with the decision the evidence can support and the decision it cannot support. Record the sample date, the denominator, the numerator, and the exclusion count for every reported rate. End with the decision the evidence supports and the decision it does not support. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      ],
      [
        "Limitations",
        "Changes in definitions, staffing, or the payment posting system during the window can create a trend that is not a process effect. A clean summary can hide missing evidence, especially when the operator who did the work is also the reviewer. If the reviewer also performed the work, note the independence limitation and use a second reviewer for a subsample. If the queue changed during the window, explain how the change affects the denominator. Link the observation to the exact field in the payment posting system and to the denial record that supports it. Selection bias remains if the team samples only records that are easy to open or cases handled by cooperative owners. Selection bias remains when the team chooses cases that are easy to open or owners who are likely to cooperate. State that the result describes the observed sample and not the entire industry or every team in the service. If the reviewer performed the work, use a second reviewer for a subsample and report the disagreement. Do not let a summary written later replace the evidence that was available at the first decision."
      ],
      [
        "Review and next action",
        "Report what moved, what did not, and which result is still unexplained. Report what moved, what stayed the same, and what the study still cannot explain. Link the action to the specific coding audit cases that motivated it. Schedule the next review before the action begins, not after the result arrives. If the case moved between owners, include both owner periods in the review note and name the handoff time. Record the decision and the next check so the study does not end as an archive. Report what moved, what stayed the same, and what the study still cannot explain. Set the next sample date before closing the review, so the action does not drift. Use a short action log that names the change, the owner, the due date, and the measure that will show whether it worked. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      ]
    ],
    "sources": [
      {
        "label": "Centers for Medicare and Medicaid Services",
        "publisher": "cms.gov",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "publisher": "hhs.gov",
        "url": "https://www.hhs.gov/hipaa/index.html"
      },
      {
        "label": "American Medical Association",
        "publisher": "ama-assn.org",
        "url": "https://www.ama-assn.org/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "nist.gov",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  }
];
