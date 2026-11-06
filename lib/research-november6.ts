import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november6Research = [
  {
    "slug": "how-often-do-payer-phone-attempts-end-without-a-reference-number",
    "title": "How often do payer phone attempts end without a reference number?",
    "cluster": "measurement",
    "topic": "payer call documentation",
    "publishedAt": "2026-11-06",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for payer call documentation, with one outbound attempt as the unit, a missing-reference rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-6/how-often-do-payer-phone-attempts-end-without-a-reference-number.webp",
    "heroImage": "/images/november-6/how-often-do-payer-phone-attempts-end-without-a-reference-number.webp",
    "readingMinutes": 13,
    "keyStats": [
      "One outbound payer attempt is the unit of analysis.",
      "The denominator is every logged attempt in the observation window.",
      "Missing and unavailable references stay separate from a confirmed none."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks a narrow question: among outbound payer phone attempts made by one billing team during a defined window, what share ended without a usable call reference. The answer describes the team record, not payer performance across the industry. It is useful for finding which payer lines produce dead ends and whether the log template captures enough detail. It is not a scorecard for individual specialists. The count depends on the definition and the collection discipline described below.\n\nThe scope should name the payer lines, queues, and service types included in the review. Exclude inbound patient calls, internal transfers, and calls made by another department unless those calls share the same log. Include attempts that ended in a hold queue, a dropped line, or a referral to another number, because those are part of the same workflow. State whether follow-up calls on the same claim count as separate attempts. The scope should be written before collection so the denominator cannot change later.\n\nKeep the review focused on calls the billing team can control. Calls made by the front desk, a credentialing vendor, or a patient access team may use a different log and a different reference standard. If those calls are included, report them separately instead of blending them into one share. The scope note should also say whether benefit explanation calls are included, because those calls may not produce a claim reference at all. Write those decisions down before the first export so the population cannot be adjusted after the results are known."
      ],
      [
        "Population and unit of analysis",
        "The unit is one outbound attempt with a recorded start time and a defined end state. A second call to the same payer about the same claim is a new unit unless the team decides that a transferred call is a continuation. Write that decision into the protocol and apply it the same way to every case. Linked attempts should keep a shared case key so the reviewer can see the sequence. A unit definition that changes halfway through makes the share unreadable.\n\nThe population is every attempt that meets the scope during the window, not only the attempts that produced a reference. Excluding the failures would answer a different and less useful question. If the log has gaps, report the count of unverifiable attempts rather than dropping them silently. That third category keeps the denominator honest. The reviewer should be able to rebuild the population from the queue export and the log dates."
      ],
      [
        "Definitions and measures",
        "A usable reference means an identifier the payer issues for the contact and the practice can use in a later call or written follow-up. It may be a case number, a ticket number, or another traceable identifier, but it must connect to this specific contact. A claim number alone is not a call reference. Write examples of acceptable and unacceptable values before collection so reviewers classify the same way. If the payer offers a reference that cannot be used later, record it as unusable rather than counting it as present.\n\nThe primary measure is the number of attempts without a usable reference divided by all eligible attempts. Report the numerator, the denominator, and the share rather than the share alone. Supporting measures can include median hold time, the share of attempts with a documented outcome, and the share with an owner on the next action. Keep the supporting measures simple enough to collect from the same log. A measure that requires a second spreadsheet is likely to drift or disappear."
      ],
      [
        "Evidence standard",
        "Each attempt needs the date and time, the payer, the number or channel used, the claim or authorization identifier, the representative name when given, the outcome, and the reference field. The outcome should distinguish a substantive answer, a promised callback, a transfer, a disconnection, and no answer. A blank field should be labeled as missing rather than treated as no reference. That distinction matters because a blank may mean the specialist forgot to log, while no reference means the payer did not provide one.\n\nStore the evidence in the approved system and avoid copying unnecessary patient information into the analysis file. Use a pseudonymous case key for the review and keep the crosswalk under restricted access. If a screenshot is used, confirm that it shows the date and the relevant identifier. A screenshot from a different day is weak evidence for this attempt. Follow the practice privacy and security policies when exporting any log data for review.\n\nA reference stored only in the claim note is hard to find when the next reviewer searches the call log. Use the same case key in both places and record the reference in a dedicated field rather than inside a free-text paragraph. If the payer provides the reference by email or portal message, save the message with the case. The evidence should show the reference and the contact date together. A reviewer should not have to infer which call a reference belongs to when two attempts were made on the same day."
      ],
      [
        "Sampling and collection",
        "Use consecutive attempts from the observation window where the log allows it, because a consecutive sample is easier to defend than a hand-picked set. If the volume is too large, take a random sample from the full export and record how the sample was drawn. Stratify by payer or queue only after the overall count is visible. A sample that includes only the busiest line may describe that line well and the rest of the team poorly. Record every exclusion with a reason.\n\nCollect the data on a schedule that matches the work, such as a daily export or a weekly close. Reconcile the export against the log count so missing entries are visible before analysis. Ask one reviewer to classify a small overlap sample and compare the results with the primary reviewer. A disagreement rate is useful evidence about the definition. Do not change the protocol during collection unless the change is documented and applied to a later window only."
      ],
      [
        "Analysis and reporting",
        "Report the eligible attempt count, the count with a usable reference, the count with no reference, and the count that could not be verified. Show the share with a clear denominator and note the observation window. Avoid ranking individual specialists on a measure that depends on payer behavior and log discipline. Instead, group the results by payer line and by outcome type. A line with many disconnections may need a different channel rather than a different person.\n\nGive the billing lead a decision the review can support, such as changing the contact channel for one payer or adding a required field to the log. Do not present the share as proof that a payer is failing to provide references across all contacts. The data describes the sampled attempts in this practice. If the pattern is stable over several windows, test one workflow change and compare the next window. The report should state what changed and what the next review will check.\n\nPresent the result as a small table with the payer line, the eligible attempts, the missing count, and the share. Add a short note for any line with fewer than a handful of attempts, because a small denominator can make a single call look important. Do not combine payer lines that route through different phone systems unless the report explains why. The billing lead should be able to see the decision each row supports. End with one change to test in the next window and the date the team will compare it."
      ],
      [
        "Limitations and use",
        "The count depends on the quality of the call log, and a team that logs more carefully may look worse than a team that logs less. Payer phone systems change, hold times vary by day, and a representative may provide a reference only when asked. A missing reference may reflect the script rather than the payer. These limits do not make the review useless, but they should travel with the number. Use the result to improve the process, not to make a contract or compliance claim.\n\nThis protocol is administrative workflow research, not a legal, clinical, coding, or compliance determination. It does not establish whether a payer met a contractual obligation or whether a claim was handled correctly. Review any workflow change with the billing lead and the practice owner before adoption. Keep the source documents and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "CMS ICD-10",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/icd-10-codes"
      },
      {
        "label": "HHS HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
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
    "slug": "what-share-of-eligibility-rechecks-change-the-coverage-answer",
    "title": "What share of eligibility rechecks change the coverage answer?",
    "cluster": "measurement",
    "topic": "eligibility verification",
    "publishedAt": "2026-11-06",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for eligibility verification, with a defined recheck pair, a change rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-6/what-share-of-eligibility-rechecks-change-the-coverage-answer.webp",
    "heroImage": "/images/november-6/what-share-of-eligibility-rechecks-change-the-coverage-answer.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is a matched pair of eligibility checks for one appointment.",
      "A change requires a documented field difference, not a changed status word.",
      "The result describes the sampled appointments, not the payer population."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a second eligibility check changes the coverage answer for an appointment. A change may involve the plan, the member identifier, the network status, the effective date, or another recorded field. The review is meant to show whether the recheck rhythm is finding real differences and where those differences cluster. It does not measure whether the practice collected every possible dollar. The unit and the change rule must be fixed before collection begins.\n\nThe scope should name the appointment types, locations, and payers included in the review. Exclude appointments with no first check or no appointment record, and report that exclusion separately. State whether a visit rescheduled into the window counts once or twice. Include only pairs that belong to the same appointment and the same patient. A pair with a different date of service is not a recheck of the original visit.\n\nDecide in advance whether the review covers all payers or only the plans with the largest claim volume. A practice with many small plans may need a separate view for the long tail. If a plan changes its portal during the window, note the date and avoid comparing responses across the change. The scope should also state whether telehealth and in-person visits are treated the same. Those choices affect how the share can be used and which appointments the next review should target."
      ],
      [
        "Population and unit of analysis",
        "The unit is one matched pair of eligibility checks for one appointment. The first check is the earlier recorded response, and the second is the later response within the practice recheck window. If a third check exists, decide in advance whether it replaces the second or creates a new pair. Apply the rule to every case and record the choice. A pair with an unreadable first response should be marked unverifiable rather than silently dropped.\n\nThe population is every appointment in the window that has both checks and meets the scope. Count appointments, not individual calls or portal sessions, because the decision concerns the visit. If one appointment has checks from two different payers, treat the pair as a payer change only when the record shows a plan transition. Otherwise mark it for review. The analysis should show how many pairs were excluded and why."
      ],
      [
        "Definitions and measures",
        "A change means at least one defined field differs between the first and second check, and the difference is supported by the saved response. A status that moves from active to active with a different plan is a change if the plan field differs. A new member identifier is a change even when the status word stays the same. A response that cannot be compared because a field is missing is not a change. Write the field list and the comparison rule before reviewing any pair.\n\nThe primary measure is the number of pairs with a documented change divided by all eligible pairs. Report the field-level counts as well, because a plan change and an identifier change may call for different follow-up. Supporting measures can include the share of changes applied to the account, the share that required a patient conversation, and the time between the first and second check. Keep those measures tied to the same pair so the report stays coherent."
      ],
      [
        "Evidence standard",
        "Save the payer response or a note that quotes the exact fields checked for both the first and second check. Each response needs the date, the channel, the payer, the member identifier used, and the reviewer. If the payer response is a screenshot, confirm that the date and the relevant fields are visible. A current screenshot cannot prove what the first check said unless it was saved at the time. The evidence should let another reviewer compare the pair without calling the payer.\n\nHandle patient information according to the practice privacy and security policies. Use a pseudonymous appointment key in the analysis file and keep any crosswalk in an approved system. Do not include unnecessary clinical detail in the review notes. If a payer response arrives by phone, record the representative name and reference when available. A verbal answer without a date or reference is weaker evidence than a saved response.\n\nSave the response in a way that shows the field labels, not only the values. A number without a label can be misread as a group number or a member identifier. If the portal offers a downloadable response, keep that file with the appointment. When a response is copied into a note, quote the fields exactly and record the time. A later reviewer should be able to compare the two checks without opening a browser session or asking the original specialist what the screen meant."
      ],
      [
        "Sampling and collection",
        "Use all eligible pairs in the window when the volume is manageable. If sampling is necessary, draw from the full appointment list rather than from the pairs that already showed a change. Stratify by payer, service line, or booking lead time after the overall count is known. Record the sampling method, the frame, and every exclusion. A sample built from easy appointments will understate the changes that matter most.\n\nReconcile the appointment list against the eligibility records before analysis. Missing pairs should be counted, not ignored, because they may point to a workflow gap. Have a second reviewer recheck a small sample of pairs against the saved responses. Record disagreements and resolve them with the written rule. If the rule cannot resolve a disagreement, revise the rule for the next window rather than changing the current classification."
      ],
      [
        "Analysis and reporting",
        "Report the eligible pair count, the changed count, the unchanged count, and the unverifiable count. Show the change share with its denominator and the observation window. Group the changes by field and by payer so the billing lead can see where the recheck is doing useful work. Do not present the share as a benchmark for other practices or as proof that a payer is unreliable. The result describes this sample and this workflow.\n\nUse the findings to decide whether the recheck window is placed well and whether the account update step is working. A high change share may justify more frequent checks for a service line, while a low share may justify a narrower rule. A high share of changes that were not applied points to a handoff problem rather than a checking problem. Record the next action and the date the team will review the effect.\n\nPut the changed-field counts beside the overall share. A team may find that most changes are member identifier updates rather than plan changes, which calls for a different follow-up. Show the count of changes that were applied to the account and the count that were not. That second number is often more actionable than the share itself. Close the report with the owner and date for the next review so the finding does not end as an observation."
      ],
      [
        "Limitations and use",
        "A recheck can show a difference only when the payer response exposes the field being compared. Some portals show a summary that hides plan or network detail, and some payers update records on a delay. A pair collected too close together may miss a change that appears later, while a pair collected too far apart may include a change that happened after the visit. The timing of the checks is part of the result and should be reported. These limits keep the share from being read as a complete measure of coverage accuracy.\n\nThis is an administrative measurement protocol, not a clinical, coding, legal, or compliance conclusion. It does not determine whether a service is covered or what a patient will owe. Review any change to the eligibility workflow with the billing lead and the practice owner. Keep the source responses and the analysis file together for reproducibility. If the sample is too small to support a stable share, report the count and the uncertainty instead of a precise percentage."
      ]
    ],
    "sources": [
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Medicare.gov",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.medicare.gov/"
      },
      {
        "label": "HHS HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
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
    "slug": "how-many-clearinghouse-rejections-clear-on-the-first-correction",
    "title": "How many clearinghouse rejections clear on the first correction?",
    "cluster": "measurement",
    "topic": "clearinghouse rejection rework",
    "publishedAt": "2026-11-06",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for clearinghouse rejection rework, with a first-correction rule, a resubmission trail, and explicit limits for billing teams.",
    "thumbnail": "/images/november-6/how-many-clearinghouse-rejections-clear-on-the-first-correction.webp",
    "heroImage": "/images/november-6/how-many-clearinghouse-rejections-clear-on-the-first-correction.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one rejected claim and its first resubmission.",
      "A clear means the clearinghouse accepted the corrected claim.",
      "Second rejections stay linked to the original case."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of clearinghouse rejections clear after the first correction. The answer helps a billing team see whether corrections are addressing the actual cause or only changing a symptom. It also shows which rejection categories generate repeated work. The measure is local to the sampled claims and the clearinghouse messages available to the practice. It is not a statement about the clearinghouse quality in general. The first-correction rule must be fixed before collection.\n\nThe scope should name the clearinghouse, the claim types, the queues, and the observation window. Include claims rejected for data, format, enrollment, and duplicate reasons if they enter the same workflow. Exclude claims that were withdrawn by the practice for a reason unrelated to the rejection. State whether a corrected claim that was later denied by the payer counts as a clear. In this protocol it does, because the question concerns clearinghouse acceptance rather than payer adjudication.\n\nDecide whether corrected claims that were accepted and later denied belong in the numerator or only in a separate follow-up review. This protocol counts them as cleared because the clearinghouse accepted them, but the report should show the later denial count so the reader is not misled. If the practice uses more than one clearinghouse, analyze each one separately. A combined share can hide a problem that belongs to one connection or one payer setup. State those choices before the claims are classified."
      ],
      [
        "Population and unit of analysis",
        "The unit is one rejected claim and its first resubmission. If a claim is rejected twice, the second event is a new unit linked to the same case key. That linked structure lets the reviewer see both the first-correction result and the repeat pattern without double-counting the original claim. A corrected claim that was never resubmitted stays in the population as an unresolved unit. A claim with no saved rejection message should be marked unverifiable rather than assumed to be a rejection.\n\nThe population is every claim that met the scope and received a clearinghouse rejection during the window. Count claims, not rejection messages, because one claim may generate more than one message. If a single claim has two rejection reasons that were corrected together, record both reasons but treat the resubmission as one unit. The analysis should show how the team handled that case so another reviewer can repeat the choice."
      ],
      [
        "Definitions and measures",
        "A clear means the clearinghouse accepted the corrected claim for transmission to the payer. Acceptance is not the same as payer adjudication or payment. Record the acceptance evidence, such as a new claim identifier or an acceptance status with a timestamp. A resubmission that remains pending at the end of the window is unresolved, not cleared. A second rejection is a repeat, even when the second message names a different reason. These categories should be mutually exclusive in the report.\n\nThe primary measure is the number of first resubmissions accepted divided by all rejected claims with a first resubmission. Report unresolved and unverifiable units separately so the denominator is visible. Supporting measures can include the time from rejection to resubmission, the share of repeat rejections by category, and the share that required a change outside the original field. Those measures help explain the primary result without turning it into a composite score."
      ],
      [
        "Evidence standard",
        "Each unit needs the original rejection code and message, the claim identifier, the correction made, the resubmission time, and the clearinghouse response. Keep the original claim image or extract with the corrected version. If the correction changed a patient identifier or an enrollment field, record the source used to verify the new value. A correction made from memory is not reproducible. The evidence should show that the changed field is the field the rejection named.\n\nStore the evidence in the approved system and limit the analysis export to the fields needed for the review. Avoid copying clinical detail that the rejection review does not require. If a screenshot is used, confirm that it shows the claim identifier and the response date. A clearinghouse portal message that disappears after a period should be saved before it expires. Follow the practice retention and access rules for any exported claim data.\n\nKeep the original rejection message and the corrected claim submission together under one case key. A reviewer should be able to see the field that changed and the value that replaced it. If the correction required a new enrollment record, link that record to the claim rather than describing it in a note. The evidence should also show who verified the new value. A correction without a source is difficult to defend if the claim is rejected again or if a payer later questions the change."
      ],
      [
        "Sampling and collection",
        "A consecutive sample of rejected claims is usually the strongest choice because it follows the actual work. If the volume is high, draw a random sample from the complete rejection list and record the method. Do not sample only the rejections that were easy to correct or only the ones that required a second attempt. Stratify by rejection category after the overall count so the report can show where repeats concentrate. Record every exclusion and the reason.\n\nReconcile the rejection list against the resubmission records before analysis. A missing resubmission record should be investigated rather than treated as a clear. Have a second reviewer classify a small overlap sample using the same definitions. Record disagreements and resolve them with the written rule. If the clearinghouse changes its message format during the window, note the date and avoid comparing categories across the change without a caveat."
      ],
      [
        "Analysis and reporting",
        "Report the rejected claim count, the first-resubmission count, the accepted count, the repeat count, and the unresolved count. Show the first-correction clear share with its denominator and window. Group the results by rejection category so the billing lead can see which corrections work and which only move the claim to a new error. Do not rank individual specialists on a measure that depends on claim complexity and clearinghouse behavior. The useful comparison is between categories and between time periods.\n\nGive the billing lead a specific decision, such as adding a validation step for one field or changing the owner for an enrollment rejection. A low first-correction share in one category may mean the correction instruction is unclear. A high share of repeat rejections may mean the team is correcting the message rather than the cause. Record the change and the date the next review will compare. The report should separate what was observed from what the team decided to do.\n\nAdd a short list of the repeat rejection codes and the correction that failed. That list is often more useful than the overall share because it points to the instruction that needs to change. If one code repeats after a specific correction, review the clearinghouse documentation with the billing lead. Do not ask the team to try a different correction without recording why. The next window should test one change at a time so the result can be attributed to something specific."
      ],
      [
        "Limitations and use",
        "Clearinghouse messages vary in specificity, and a vague message can make a correct fix look like a failed one. A claim may be accepted by the clearinghouse and still be denied by the payer, which is outside this measure. The window may be too short to capture slow resubmissions, and the team may change its correction process during collection. These limits should be reported with the share. A single window is a starting point, not a stable performance baseline.\n\nThis is an administrative workflow measurement, not a coding, clinical, legal, or compliance determination. It does not establish whether a claim was coded correctly or whether a payer should have paid. Review any correction policy with the billing lead and the qualified coding owner. Keep the rejection messages and analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the count and the uncertainty rather than a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "CMS ICD-10",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/icd-10-codes"
      },
      {
        "label": "HHS HIPAA Security Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
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
    "slug": "how-much-appeal-turnaround-is-waiting-rather-than-working-time",
    "title": "How much appeal turnaround is waiting rather than working time?",
    "cluster": "measurement",
    "topic": "appeal cycle time",
    "publishedAt": "2026-11-06",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for appeal cycle time, separating waiting time from active work, with a defined clock and explicit limits for billing teams.",
    "thumbnail": "/images/november-6/how-much-appeal-turnaround-is-waiting-rather-than-working-time.webp",
    "heroImage": "/images/november-6/how-much-appeal-turnaround-is-waiting-rather-than-working-time.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one appeal case from denial receipt to submission.",
      "Waiting and active work are measured as separate intervals.",
      "A paused case keeps its pause reason and resume date."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how much of an appeal case elapsed time was spent waiting rather than being actively worked. Waiting may include a missing record, an unavailable reviewer, a payer response, or a queue delay. Active work includes assembling the packet, checking the policy, and preparing the submission. The distinction helps a billing lead see whether the bottleneck is capacity, information, or a decision. The measure describes the sampled cases and does not assign blame to a person or a payer.\n\nThe scope should name the appeal types, payers, and queues included in the review. Exclude cases that were withdrawn before submission and cases with no recorded start or end event. State whether a reopened appeal counts as a new case or continues the original. Include the filing deadline in the case record so the reviewer can see how much of the elapsed time occurred near the deadline. A case with no deadline record is still measurable for elapsed time but not for deadline pressure.\n\nState whether the review includes appeals that were filed late or only those filed within the payer window. Late cases can teach more about the workflow, but they can also distort a measure of normal turnaround. Include them and mark them so the report can show both views. The scope should also say whether a request for additional information restarts the clock. That decision changes the meaning of every interval and should be explained in the report."
      ],
      [
        "Population and unit of analysis",
        "The unit is one appeal case from the denial received event to the submission event. If the case pauses and resumes, the pause is an interval inside the unit rather than a new case. A case that misses its deadline remains in the population and is marked as late rather than excluded. If a case is submitted twice, treat the first submission as the end event and note the second as a separate event. The unit definition should be applied before the data is pulled.\n\nThe population is every appeal case that met the scope and had both a start and an end event during the window. Cases still open at the end of the window are censored, not complete, and should be reported separately. A case with a missing start event may still be described by its first recorded work date, but that substitute should be labeled. The analysis should show how many cases were excluded for missing events so the denominator is transparent."
      ],
      [
        "Definitions and measures",
        "Elapsed time is the difference between the denial received date and the submission date, measured in the same unit for every case. Active work is the sum of intervals with a recorded work event, such as a document review or packet assembly. Waiting time is elapsed time minus active work, with each pause carrying a reason. A pause without a reason is unclassified rather than assumed to be waiting. These definitions should be written before collection because small changes can shift the result.\n\nThe primary measure is the share of elapsed time classified as waiting across the sampled cases. Report the median and the range rather than only the mean, because a few long cases can distort an average. Supporting measures can include the number of pauses per case, the longest pause reason, and the share of cases submitted within the payer window. Those measures help explain where the time went without turning the report into a single score."
      ],
      [
        "Evidence standard",
        "Each case needs the denial received date, the submission date, the work events, the pause events, and the deadline source. A work event should have a date, a person or role, and a short description of what was completed. A pause event should have a reason and a resume date when known. A case note that says worked on appeal without a time or task cannot support an interval. The reviewer should be able to rebuild the timeline from the case record.\n\nUse the approved case system and keep the analysis export limited to the fields needed for the review. Avoid copying clinical detail that is not necessary to measure the workflow. If a case record is incomplete, mark the missing interval rather than filling it with an estimate. Follow the practice privacy and security policies for any exported data. The evidence standard should be the same for every case in the sample, regardless of who owns it.\n\nRecord the date and time of each work event, not only the date. A case that moves through three short tasks in one afternoon looks different from one that receives a single task each week. If the team works in batches, note the batch date so the interval is not read as continuous effort. A pause should start when the work stops and end when it resumes. The timeline should show the gaps plainly enough for another reviewer to rebuild the case."
      ],
      [
        "Sampling and collection",
        "Use consecutive completed cases from the window when possible, because they follow the real queue. If the volume is high, draw a random sample from the full case list and record the method. Do not sample only the fast cases or only the cases that missed a deadline. Stratify by payer, appeal type, or owner after the overall result is visible. Include late cases and censored cases in the reporting so the picture is not biased toward clean completions.\n\nReconcile the case list against the submission records before analysis. Check that the start and end dates are in the correct order and that pause intervals do not overlap. Have a second reviewer rebuild a small sample of timelines from the case notes. Record disagreements and resolve them with the written definitions. If the team changes its note format during the window, mark the change and avoid comparing intervals across it without a caveat."
      ],
      [
        "Analysis and reporting",
        "Report the completed case count, the open case count, the median elapsed days, the median active days, and the share of time classified as waiting. Show the pause reasons as counts so the billing lead can see which dependency dominates. Avoid presenting the share as a productivity score for an individual. A case can have a long waiting interval because a payer or a clinical reviewer was slow, not because the specialist was idle.\n\nGive the billing lead a decision the data can support, such as adding a document checklist at intake or setting an earlier escalation for a missing record. A high waiting share with one dominant reason points to a specific fix. A high active-work share may mean the packet process is too manual. Record the change and the date of the next review. The report should show what was observed and what the team decided to test.\n\nReport the waiting reasons in descending order and show the median pause for each. A long wait for a missing record calls for a different fix than a long wait for a reviewer. If the same reason appears in several cases, name the owner who can change it. The report should not stop at the share of waiting time. It should end with the one dependency the team can act on next and the date the effect will be reviewed."
      ],
      [
        "Limitations and use",
        "Case notes are often incomplete, and an unrecorded work event can make active time look like waiting. A specialist may work on a case without leaving a timestamp, especially in a busy week. Payer response times and clinical review availability are outside the team control. The window may include a holiday or a major payer change that distorts the result. These limits should travel with the share so the number is not read as a complete account of effort.\n\nThis is an administrative workflow measurement, not a legal, clinical, coding, or compliance conclusion. It does not determine whether an appeal was timely or whether a denial should be overturned. Review any change to the appeal workflow with the billing lead and the qualified reviewer. Keep the timelines and analysis file together for reproducibility. If the sample is small or the notes are inconsistent, report the limitation instead of forcing a precise percentage."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Appeals",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/claims-appeals"
      },
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "HHS HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
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
    "slug": "where-do-provider-enrollment-renewals-sit-past-their-review-date",
    "title": "Where do provider enrollment renewals sit past their review date?",
    "cluster": "measurement",
    "topic": "enrollment renewal aging",
    "publishedAt": "2026-11-06",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for enrollment renewal aging, with a roster-based unit, an aging bucket rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-6/where-do-provider-enrollment-renewals-sit-past-their-review-date.webp",
    "heroImage": "/images/november-6/where-do-provider-enrollment-renewals-sit-past-their-review-date.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one provider-payer enrollment record.",
      "Aging is measured from the internal review date, not the payer notice.",
      "Open records stay in the population until the status is verified."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks where enrollment renewal records sit past their internal review date and how long they remain open. The internal date is the one the practice sets to start preparing a renewal, not the payer deadline. Measuring from the internal date shows whether the team is starting early enough to avoid a last-minute submission. The result describes the roster and the sampled records, not the credentialing quality of a provider. It is a workflow signal rather than a compliance finding.\n\nThe scope should name the payers, provider types, and enrollment categories included in the review. Exclude records that were closed before the window and records with no internal review date. State whether a record with a pending payer response counts as open or awaiting. Include both active and inactive providers if the roster tracks them, because an inactive record can still need a closing action. Write the scope before pulling the list so the denominator is stable.\n\nState whether the review covers initial enrollments as well as renewals. Initial enrollment has a different set of dependencies and may deserve its own report. If the roster combines both, add a field that lets the reviewer separate them. The scope should also say whether a record that is waiting on a provider signature counts as open. Those choices affect the age distribution and the actions the report can support."
      ],
      [
        "Population and unit of analysis",
        "The unit is one provider-payer enrollment record. A record with multiple locations or enrollment types may be one row or several, depending on how the roster is built. Use the roster unit consistently and note the choice. A record that is renewed and then reopened for a correction should keep the same key with a new event. The unit should not change because a payer issues a new identifier during the renewal.\n\nThe population is every record that was open at any point during the observation window and had an internal review date. A record that was closed before the window is outside the population. A record with no review date is a data quality exception and should be counted separately. Report the count of records that were excluded so the reader can see how the population was built."
      ],
      [
        "Definitions and measures",
        "Aging is the number of days between the internal review date and the date the record reached a verified status, or the end of the observation window for records still open. Use calendar days and one time zone for every record. A record is past its review date when the current date is later than the internal date and the status is not verified. A record awaiting a payer response is still past its date even though the team has done its part. That distinction should be reported as a separate awaiting category.\n\nThe primary measure is the share of open records past their internal review date. Report the count and the age distribution in buckets such as one to seven days, eight to thirty days, and more than thirty days. Supporting measures can include the share awaiting a payer response, the share with no owner, and the share with no recent status note. Keep the buckets wide enough that small day-to-day changes do not create noise."
      ],
      [
        "Evidence standard",
        "Each record needs the provider, payer, enrollment type, internal review date, current status, owner, last status date, and the source of the last verification. A status without a source is a claim rather than evidence. If the payer directory was checked, record the date and the page or reference used. If the status came from a portal, record the response date. The reviewer should be able to see why the record is considered open or verified.\n\nStore the roster export and the evidence in the approved system. Limit the analysis file to the fields needed for aging and avoid unnecessary provider or patient information. If a record is missing an owner or a review date, mark the gap rather than inferring a value. Follow the practice privacy and security policies for any exported roster data. A record with a conflicting status should be routed for review rather than counted as verified.\n\nKeep the last verification source and date beside the status, not in a separate audit file. A roster that says active without a source cannot show whether the status was checked this month or last year. If the check came from a payer portal, record the page and the time. If it came from a directory, record the directory name. The evidence should be specific enough for a second reviewer to repeat the check without contacting the payer again."
      ],
      [
        "Sampling and collection",
        "Use the full roster for the window when the volume is manageable, because aging is a population measure and a small sample can miss the oldest records. If sampling is necessary, include every record past thirty days and sample the rest. Record the method and the frame. Do not sample only the records that are easy to verify or only the ones with an assigned owner. Stratify by payer and provider type after the overall count is known.\n\nReconcile the roster against the payer directory or portal for a sample of high-volume records. Check that the internal review date is not later than the payer deadline minus the preparation time. Have a second reviewer recheck a small set of dates and statuses. Record disagreements and resolve them with the written rule. If the roster changes during collection, keep a dated snapshot and analyze the snapshot rather than a moving list."
      ],
      [
        "Analysis and reporting",
        "Report the open record count, the count past the internal review date, the count awaiting a payer response, and the count with no owner. Show the age buckets and the observation window. Group the results by payer and provider type so the billing lead can see where the delay concentrates. Do not present the share as a credentialing score for an individual provider. A record can be late because a payer is slow, a document is missing, or the roster was not updated.\n\nGive the billing lead a decision the data can support, such as moving the internal review date earlier for one payer or assigning a backup owner for a provider group. A cluster of records with no owner points to a roster maintenance problem. A cluster awaiting a payer response points to a follow-up problem. Record the change and the next review date so the team can compare the effect instead of relying on memory.\n\nShow the oldest five records by name and age, even when the overall share looks acceptable. A small number of very old records can create more risk than a larger number of recent delays. Assign each of those records a named owner and a next check date. Do not publish the list beyond the people who need it. The review should end with a commitment to recheck those records first and a date for the next snapshot."
      ],
      [
        "Limitations and use",
        "The roster is only as good as its update discipline, and a record that looks late may have been verified without a note. Internal review dates are practice choices, not payer requirements, so the share cannot be compared directly with another organization. Payer processing times vary, and a record can sit awaiting a response even when the team has completed every action. The window may include a renewal season that distorts the distribution. These limits should be reported with the result.\n\nThis is an administrative workflow measurement, not a legal, clinical, coding, or compliance determination. It does not establish whether a provider is enrolled, credentialed, or eligible to bill. Review any change to the roster or renewal process with the credentialing lead and the billing owner. Keep the roster snapshot and analysis file together for reproducibility. If the data quality is too weak to support a stable share, report the gaps and repair the roster first."
      ]
    ],
    "sources": [
      {
        "label": "CMS Provider Enrollment",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers"
      },
      {
        "label": "National Plan and Provider Enumeration System",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://nppes.cms.hhs.gov/"
      },
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "HHS HIPAA Privacy Rule",
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
    "slug": "how-many-payment-plan-agreements-lack-a-recorded-review-date",
    "title": "How many payment plan agreements lack a recorded review date?",
    "cluster": "measurement",
    "topic": "payment plan documentation",
    "publishedAt": "2026-11-06",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for payment plan documentation, with an agreement-based unit, a review-date rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-6/how-many-payment-plan-agreements-lack-a-recorded-review-date.webp",
    "heroImage": "/images/november-6/how-many-payment-plan-agreements-lack-a-recorded-review-date.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one active patient payment plan agreement.",
      "A review date is present only when it is stored in the account record.",
      "Plans with no review date stay in the denominator as a documentation gap."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how many active patient payment plan agreements lack a recorded review date. A review date is the next date the practice intends to check the plan, not the next payment due date. The distinction matters because a plan can be current on payments and still have no scheduled review. The result shows a documentation gap in the sampled accounts, not whether the patient will pay. It helps a billing lead decide whether the plan template and the account workflow are working.\n\nThe scope should name the plan types, account statuses, and locations included in the review. Include active plans with a balance and exclude plans that were completed, cancelled, or never activated. State whether a plan with a zero balance but an open review should stay in the population. Write the rule before pulling the list so the denominator does not shift. A plan that was reopened during the window should be counted once unless the practice treats it as a new agreement.\n\nState whether the review covers plans created by every location and every approved workflow. A plan created through a patient portal may store its review date in a different field from a plan created by a billing specialist. If the systems differ, report the locations separately. The scope should also say whether a plan with a missed payment but an active status stays in the population. That decision should be made before the snapshot is taken."
      ],
      [
        "Population and unit of analysis",
        "The unit is one active payment plan agreement linked to one patient account. If a patient has two separate agreements for two balances, count them separately when the account record shows distinct terms. If the record merges them into one plan, count the merged plan once. Use the account identifier and the agreement start date to build a stable key. A plan that changes its schedule keeps the same key and gets a new event date. The unit should not change because the payment amount was adjusted.\n\nThe population is every active plan that met the scope on the snapshot date. A plan with no agreement record is outside the population, even if the account has a balance. A plan with a missing start date is a data quality exception and should be counted separately. Report the total active plan count and the count excluded for missing records. The reader should be able to rebuild the denominator from the snapshot and the rules."
      ],
      [
        "Definitions and measures",
        "A recorded review date means a date stored in the account record with a defined meaning, such as next plan review or next account check. A payment due date is not a review date, and a free-text note that says review later is not a date. A date in a separate spreadsheet that is not linked to the account does not count for this measure. The definition should name the field and the system of record before collection. If the practice uses more than one field, list them and treat the first populated field as the record.\n\nThe primary measure is the number of active plans without a recorded review date divided by all active plans in the sample. Report the count and the share, and show the plans with a review date that is already past. Supporting measures can include the share of plans with an assigned owner, the share with a current payment status, and the share with a documented approval. Those measures help separate a missing date from a broader documentation gap."
      ],
      [
        "Evidence standard",
        "Each unit needs the account identifier, the plan start date, the current balance, the payment schedule, the review field, and the last note date. Record the system and the snapshot date so the review is reproducible. A screenshot of the account should show the field label and the date. If the review date is stored in a task or workflow tool, record the task identifier and its link to the account. The evidence should let a second reviewer confirm the presence or absence of the date without guessing.\n\nUse the approved system for the analysis export and limit the fields to those needed for the review. Avoid copying card numbers, bank details, or unnecessary clinical information. If a plan is documented only in a free-text note, mark it as no structured review date rather than interpreting the note. Follow the practice privacy and security policies for any exported data. A missing date should be recorded as a gap, not filled from the payment schedule.\n\nRecord the field name and the system for every review date found. A date that appears only in a free-text note is not the same as a structured field, even when the value looks correct. If a task tool holds the date, record the task identifier and the account link. The evidence should show whether the date is future, past, or absent. A reviewer should not have to interpret a note to classify the plan or to decide whether the record is complete."
      ],
      [
        "Sampling and collection",
        "Use a snapshot of all active plans when the volume is manageable, because the measure is about the population rather than a few cases. If sampling is necessary, draw from the full active list and record the method. Include plans with a past review date and plans with no date, not only the plans that look current. Stratify by plan age, balance band, or location after the overall count is known. Record every exclusion and the reason.\n\nReconcile the account list against the payment plan records before analysis. Check that a plan marked active is not actually completed or cancelled. Have a second reviewer check a small sample of review dates and missing fields against the account. Record disagreements and resolve them with the written definition. If the account system changes during collection, keep the snapshot and note the change date rather than mixing two versions."
      ],
      [
        "Analysis and reporting",
        "Report the active plan count, the count with a review date, the count without one, and the count with a past review date. Show the share without a review date and the snapshot date. Group the results by location, plan age, or owner so the billing lead can see where the gap concentrates. Do not present the share as a prediction of collection outcomes or patient behavior. The result is a documentation measure, and it should be read that way.\n\nGive the billing lead a decision the data can support, such as adding a required review field to the plan template or assigning a monthly review queue. A cluster in one location may point to a training gap, while a cluster in older plans may point to a template that was introduced later. Record the change and the date of the next snapshot. The report should separate the documentation gap from any question about whether the plan is affordable or appropriate.\n\nShow the count of plans with a past review date separately from the count with no date. The two gaps call for different work: one needs a review, the other needs a record. If the same location has both gaps, check whether the plan template is being used consistently. Report the sample of plans with a payment issue as context, not as proof of a collection risk. The next snapshot should test one template change and compare the result."
      ],
      [
        "Limitations and use",
        "A plan can have a review date stored in a tool that the export does not capture, which makes the gap look larger than it is. A free-text note may contain a date that the structured field misses. The snapshot describes one day and may not reflect plans created or closed the next day. The practice may use different plan templates across locations, so the field definitions may not be identical. These limits should be reported with the share so the number is not read as a complete documentation audit.\n\nThis is an administrative workflow measurement, not a legal, clinical, coding, or financial conclusion. It does not determine whether a plan is enforceable or whether a balance is collectible. Review any change to the plan template or review process with the billing lead and the practice owner. Keep the snapshot and analysis file together for reproducibility. If the structured data is too inconsistent, report the limitation and fix the template before measuring again."
      ]
    ],
    "sources": [
      {
        "label": "Medicare.gov",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.medicare.gov/"
      },
      {
        "label": "CMS Internet Only Manuals",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "HHS HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
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
    "slug": "what-does-a-small-balance-write-off-trail-show-about-approval-coverage",
    "title": "What does a small balance write-off trail show about approval coverage?",
    "cluster": "measurement",
    "topic": "write-off approval audit",
    "publishedAt": "2026-11-06",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for small balance write-off approvals, with a request-based unit, an approval evidence rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-6/what-does-a-small-balance-write-off-trail-show-about-approval-coverage.webp",
    "heroImage": "/images/november-6/what-does-a-small-balance-write-off-trail-show-about-approval-coverage.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one write-off request and its approval event.",
      "Approval coverage requires an approver, a date, and the approved amount.",
      "Requests split to avoid a limit are flagged for review."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of small balance write-off requests have a complete approval trail. A complete trail links the request, the evidence, the approver, the approval date, and the amount that was written off. The review is meant to show where the queue relies on memory or a status label instead of a recorded decision. It does not judge whether a specific write-off was appropriate. That question belongs to the billing lead and the practice policy. The trail can show coverage, not correctness.\n\nThe scope should name the balance threshold, the account types, the locations, and the observation window. Include requests that were approved, declined, or still open at the end of the window. Exclude write-offs that were reversed before the snapshot, but keep the reversal event in a separate note. State whether a request that was split into smaller amounts counts as one unit or several. Write that rule before pulling the list so the denominator is consistent.\n\nState whether the review includes declined requests and requests that were later reversed. A declined request still needs a complete decision trail, and a reversal may reveal a payment that arrived late. If the practice uses different approval limits by location, report those groups separately. The scope should also say whether a write-off below the review threshold is excluded. Those choices determine whether the report describes the approval process or the whole write-off population."
      ],
      [
        "Population and unit of analysis",
        "The unit is one write-off request and its approval event. If the same account has two separate requests in the window, count them separately when they have different request dates and amounts. If a request is split into two entries to stay under a limit, treat the split as one unit with a flag. A request that is reopened after a reversal keeps the same key and gets a new event. The unit should not change because the account balance changed after the request.\n\nThe population is every request that met the scope and had a request date in the window. A write-off with no request record is outside the population, even if the account shows a reduction. A request with no amount or no account identifier is a data quality exception and should be counted separately. Report the total request count and the exclusions so the reader can rebuild the population."
      ],
      [
        "Definitions and measures",
        "Approval coverage means the record contains a named approver, an approval date, and the approved amount, and those values are linked to the request. A status that says approved without an approver or date does not meet the definition. A verbal approval recorded in a note counts only when the note names the approver and the date. A request that was declined is complete when the decision and the reason are recorded. The definition should be written before the review and applied to every request.\n\nThe primary measure is the number of requests with complete approval coverage divided by all eligible requests. Report approved, declined, open, and reversed requests separately so the share is not diluted by status. Supporting measures can include the share of requests with evidence attached, the share with a reason code, the time from request to decision, and the count flagged for splitting. Those measures help explain the coverage result without turning it into a single score."
      ],
      [
        "Evidence standard",
        "Each request needs the account identifier, the balance, the request date, the reason code, the evidence checked, the approver, the approval date, and the approved amount. If the approver is a role, record the person who acted in that role. If the evidence includes a payment posting check, record the date and source. A request that cites a policy should include the policy version. The reviewer should be able to see why the amount was approved without opening a separate message thread.\n\nStore the request and approval evidence in the approved system. Limit the analysis export to the fields needed for the review and avoid unnecessary patient information. If a request was split, keep both entries linked to the original account and mark the relationship. Follow the practice privacy and security policies for exported data. A missing approval should be recorded as a gap rather than inferred from the write-off posting.\n\nKeep the request, the evidence, and the approval in one case view even when the people involved work in different systems. A link is better than a copied summary because it stays current. If the approval was given in a meeting, record the meeting date and the person who accepted the decision. If the approver later changes, keep both names and the effective date. The trail should show the decision path rather than only the final status label."
      ],
      [
        "Sampling and collection",
        "Use all requests in the window when the volume is manageable, because approval coverage is a population measure. If sampling is necessary, draw from the full request list and include every request above the largest approval limit. Record the method and the frame. Do not sample only the approved requests or only the ones with a clean note. Stratify by location, approver role, and amount band after the overall count is known. Record every exclusion and the reason.\n\nReconcile the request list against the write-off postings before analysis. A posting without a request is a separate finding and should not be counted as a covered request. Have a second reviewer check a small sample of approvals against the request records. Record disagreements and resolve them with the written definition. If the approval workflow changes during the window, note the date and analyze the periods separately rather than mixing them."
      ],
      [
        "Analysis and reporting",
        "Report the eligible request count, the complete count, the incomplete count, and the open count. Show the coverage share and the observation window. Group the results by approver role, location, and amount band so the billing lead can see where the gaps concentrate. Do not rank individual specialists on a measure that depends on queue design and approval availability. A gap may mean the approver did not record the decision, not that the specialist failed to ask.\n\nGive the billing lead a decision the data can support, such as adding a required approver field to the queue or setting a weekly approval review. A cluster of incomplete requests with one approver may point to a recording habit. A cluster of split requests may point to a limit that encourages fragmentation. Record the change and the date of the next review. The report should separate what the trail shows from what the practice decides to change.\n\nShow the incomplete count by missing element, such as no approver, no date, or no amount. That breakdown is more useful than a single coverage share because it points to the field that needs attention. If one approver role accounts for most gaps, review the queue design with that role. Do not assume the specialist failed to ask. The next review should test one template or routing change and report whether the gap narrowed."
      ],
      [
        "Limitations and use",
        "The trail can show that a decision was recorded, not that the decision was correct or fair. A complete approval may still violate policy, and an incomplete record may reflect a valid decision made in another system. The request list may miss write-offs that were posted without a request. The window may include a policy change that altered the approval limit. These limits should be reported with the coverage share so the number is not read as an audit opinion.\n\nThis is an administrative workflow measurement, not a legal, clinical, coding, or financial conclusion. It does not determine whether a write-off was appropriate or whether an account was handled correctly. Review any change to the approval workflow with the billing lead and the practice owner. Keep the request records and analysis file together for reproducibility. If the data cannot support a stable conclusion, report the gaps and repair the trail before measuring again."
      ]
    ],
    "sources": [
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
        "label": "HHS HIPAA Security Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/security/index.html"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "CMS Fee Schedules",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/payment/fee-schedules"
      }
    ]
  }
];
