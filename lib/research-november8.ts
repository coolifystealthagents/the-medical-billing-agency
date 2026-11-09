import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november8Research = [
  {
    "slug": "what-share-of-underpayments-clear-after-a-documented-payer-review",
    "title": "What share of underpayments clear after a documented payer review?",
    "cluster": "measurement",
    "topic": "underpayment recovery",
    "publishedAt": "2026-11-08",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for underpayment recovery, with one reviewed claim line as the unit, a contract-based expected amount, and explicit limits for billing teams.",
    "thumbnail": "/images/november-8/what-share-of-underpayments-clear-after-a-documented-payer-review.webp",
    "heroImage": "/images/november-8/what-share-of-underpayments-clear-after-a-documented-payer-review.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one reviewed claim line with a contracted expected amount.",
      "A cleared underpayment means the payer paid the difference or the contract was corrected.",
      "The result describes the sampled review queue, not the payer's overall accuracy."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of reviewed underpayments clear after a documented payer review. The purpose is to learn whether the review queue produces recoveries or only produces activity, and to show where the answer depends on the evidence. A cleared item means the payer issued the difference or the practice confirmed that the contract rate was wrong and corrected it. The result describes one practice's review queue during a defined window, not the payer's accuracy across all providers.\n\nThe scope should name the payers, service lines, contract types, and date range included in the review. State whether the queue includes claims paid below the fee schedule because of bundling, medical necessity, or patient responsibility. Those categories need separate handling because they are not the same kind of underpayment. Decide whether a partial recovery counts as cleared, and write the rule before the first case is classified.\n\nKeep the work inside the administrative boundary. The review can compare a paid amount with a contracted amount, but it should not decide whether the service was clinically appropriate. If a claim paid less because a service was denied for a clinical reason, route that item to the denial workflow. The underpayment protocol measures the payment comparison, not the clinical judgment, and that distinction keeps the result honest."
      ],
      [
        "Population and unit of analysis",
        "The unit is one claim line reviewed against the contract, with a payer, a service code, a date of service, an expected amount, and a paid amount. If a claim has several lines, count each line separately unless the team decides in advance to review only the claim total. A line-level unit is more precise and easier to tie to the contract. Write the decision down so it does not change between payers.\n\nThe population is every line that enters the review queue in the window, including the items that are later found not to be underpayments. Excluding the non-underpayments after the fact would inflate the recovery rate by shrinking the denominator. Include batch reviews as one item only when the batch has a single outcome, and record how many lines the batch covers. Report the line count beside the item count so the reader can see the difference.\n\nLink each unit to the remittance and the contract version. A reviewer should be able to open the payment detail and the fee schedule from the same record. If the contract has multiple rates, store the one that applies to the claim and the reason it applies. Units without a contract reference should be marked unverifiable rather than estimated."
      ],
      [
        "Definitions and measures",
        "A cleared underpayment means the payer paid the difference, the practice received a written correction, or the contract was confirmed to be wrong and the expected amount was updated. A denied review means the payer declined the request and the practice accepted the answer. An open item means the review is still waiting for a response at the close of the window. Use these categories consistently and write an example of each before classification starts.\n\nThe primary measure is the number of cleared items divided by all closed items, with the open count shown beside it. A second measure is the recovered dollars divided by the requested dollars, because a high clearance count can hide small recoveries. Report the median days from request to outcome so the team can see the cost in time. Keep the measures tied to the same unit and the same window.\n\nA useful companion measure is the share of reviewed items that were not underpayments at all. That number shows whether the queue is well targeted or whether the team is spending time on claims that should have been closed earlier. Report it beside the recovery rate and explain the difference. The two numbers answer related questions and should not be combined into a single score."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim identifier, the payer, the service code, the date of service, the contracted rate and its source, the paid amount, and the remittance reference. Record the review request date, the payer response, and the person who closed the item. If the response was verbal, save a written confirmation or a call reference. A recovered dollar without a traceable source is weak evidence for the next review.\n\nKeep the contract version and the fee schedule effective date with the expected amount. A rate that changed during the window may explain a difference that looks like an underpayment. Store the original paid amount separately from any adjustment so the reviewer can see the change. If the claim was corrected, note the correction date and the reason.\n\nHandle patient and provider information according to the practice privacy and security policies. Use a pseudonymous claim key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the review does not need. The measurement should use the minimum data required to compare the payment with the contract."
      ],
      [
        "Sampling and collection",
        "Use every item in the review queue when the volume is manageable. If sampling is necessary, draw from the full queue rather than from the items that were already sent to the payer. A sample built from sent items will overstate the clearance rate because it excludes the items the team decided not to pursue. Record the sampling frame, the method, and every exclusion.\n\nReconcile the review log against the accounts receivable system before analysis. Items missing a payment or a contract link should be counted, not silently dropped. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate is useful evidence about the definitions. Do not change the classification rule during collection unless the change is documented and applied to a later window.\n\nRecord the batch reviews in a way that preserves the line count. If a payer responds to a batch with one payment, allocate the payment to the lines using the payer's detail rather than an average. When the allocation is unclear, mark the batch as partially verifiable. The team should be able to repeat the count from the saved files."
      ],
      [
        "Analysis and reporting",
        "Report the closed item count, the cleared count, the denied count, the open count, and the unverifiable count. Show the clearance share with its denominator, the recovered dollars, and the observation window. Group the results by payer and by service line, because a team-wide rate can hide one contract that produces most of the recoveries. Show the median days to outcome beside each group.\n\nGive the billing lead a decision the review can support, such as changing a threshold, moving a pattern to contracting, or stopping a category that never recovers. Do not present the share as proof that the payer is acting in bad faith. The data describes the sampled queue in this practice. If one pattern is consistently underpaid, test one change and compare the next window. Record the change date so the next review can separate before and after.\n\nKeep a short list of the categories with the highest recovered dollars and the longest resolution time. Review that list with the contracting owner before the next quarter. Do not change the contract and the review method in the same month, because the result will be hard to interpret. A small documented change is easier to defend than a broad cleanup."
      ],
      [
        "Limitations and use",
        "The result depends on the quality of the contract data and the reviewer's ability to match the claim to the right rate. A practice with better contract records may show a higher clearance rate because the evidence is easier to assemble. A payer may also correct a rate without labeling it as a recovery, which makes the outcome hard to classify. These limits should travel with the number.\n\nThis protocol is administrative workflow research, not a legal, coding, or compliance determination. It does not establish whether a contract was breached or whether a payer owes a specific amount. Review any recovery request with the billing lead and the contracting owner before sending it. Keep the review log, the remittance, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Physician Fee Schedule",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/payment/fee-schedules/physician"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Office of Inspector General",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://oig.hhs.gov/"
      },
      {
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ]
  },
  {
    "slug": "how-often-does-a-patient-estimate-match-the-final-balance",
    "title": "How often does a patient estimate match the final balance?",
    "cluster": "measurement",
    "topic": "patient estimate accuracy",
    "publishedAt": "2026-11-08",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for patient estimate accuracy, with one scheduled service as the unit, a tolerance rule, documented benefits, and explicit limits for billing teams.",
    "thumbnail": "/images/november-8/how-often-does-a-patient-estimate-match-the-final-balance.webp",
    "heroImage": "/images/november-8/how-often-does-a-patient-estimate-match-the-final-balance.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one scheduled service with a written estimate and a final patient balance.",
      "A match means the final balance falls within a stated dollar tolerance of the estimate.",
      "The result describes the sampled estimate process, not the patient's ability to pay."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a written patient estimate matches the final patient balance after adjudication. The purpose is to find where the estimate process loses accuracy and whether the gap is large enough to change the front-desk conversation. A match means the final balance falls within a stated dollar tolerance of the estimate. The result describes one practice's estimates during a defined window, not the accuracy of a vendor or a payer's benefit quote.\n\nThe scope should name the service lines, payers, and estimate methods included in the review. State whether the estimate covers a single service, a visit with several possible services, or a surgical episode. Those categories have different uncertainty and should be reported separately. Decide whether a balance of zero counts as a match when the estimate was also zero, and write the rule before collection.\n\nKeep the review inside the administrative boundary. The analysis can compare a quoted amount with a final balance, but it should not judge whether the care was appropriate or whether the patient should have paid. If a claim was denied for a clinical reason, route that case to the denial review instead of counting it as an estimate error. The protocol measures the estimate process, not the clinical decision."
      ],
      [
        "Population and unit of analysis",
        "The unit is one scheduled service with a written estimate and a final patient balance from an adjudicated claim. If a visit produces several claims, count the service that the estimate covered and note any additional services separately. If the estimate covered a range, record the midpoint and the endpoints so the reviewer can see how the range was handled. Write the unit decision down and apply it consistently.\n\nThe population is every estimate issued in the window that has a final balance at the close of the review, plus a separate count of estimates still waiting for adjudication. Excluding the pending items would overstate or understate the match rate depending on which claims are slow. Include the estimates that were never shared with the patient only if the record shows they were prepared. Report the prepared count and the shared count separately.\n\nLink each unit to the appointment, the benefits check, the estimate version, and the final remittance. A reviewer should be able to reconstruct the number the patient saw. If the estimate was revised before the visit, use the final version and note the change. Units without a saved estimate should be marked unverifiable rather than reconstructed from memory."
      ],
      [
        "Definitions and measures",
        "A match means the final patient balance is within the stated dollar tolerance of the estimate, after posting all primary and secondary payments. A close match means the balance is outside the tolerance but within a wider band that the practice decides to track. A miss means the balance is outside the wider band. An unverifiable case means the estimate or the final balance cannot be located. Write an example of each category before classification starts.\n\nThe primary measure is the number of matches divided by all verified cases, with the pending and unverifiable counts shown beside it. A second measure is the median absolute difference between the estimate and the final balance, because a high match rate can hide a few very large misses. Report the share of misses where the final balance was higher than the estimate, since that is the direction that creates patient surprise. Show the two measures side by side in the monthly summary so the reader can see the size and the direction of the gap.\n\nA useful companion measure is the share of estimates that included a documented benefits check. That number shows whether the process is being followed and helps explain the match rate. Report it beside the accuracy result and do not combine the two into one score. The process measure and the outcome measure answer different questions."
      ],
      [
        "Evidence standard",
        "Each unit needs the appointment date, the service code, the estimate amount, the estimate version, the benefits source and check date, the final allowed amount, the patient responsibility, and the remittance reference. Record who prepared the estimate and how it was shared with the patient. If the patient received a verbal estimate only, mark that method in the record. A verbal estimate without a saved amount is hard to evaluate.\n\nKeep the benefits assumptions separate from the final adjudication. A deductible that was not yet met at the time of the check is a legitimate reason for a difference, not necessarily a process failure. Store the original estimate and any later revision so the reviewer can see what changed. If the patient balance was adjusted after a call, note the adjustment and the reason.\n\nHandle patient information according to the practice privacy and security policies. Use a pseudonymous appointment key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the review does not need. The measurement should use the minimum data required to compare the estimate with the final balance."
      ],
      [
        "Sampling and collection",
        "Use all estimates in the window when the volume is manageable. If sampling is necessary, draw from the full set of issued estimates rather than from the ones that were discussed at the front desk. A sample built from discussed estimates may overstate accuracy because those patients had a chance to ask questions. Record the sampling frame, the method, and every exclusion.\n\nReconcile the estimate log against the appointment schedule and the claim system before analysis. Estimates with no matching claim should be counted as pending, not dropped. Have a second reviewer check a small overlap sample and compare the classifications. A disagreement rate is useful evidence about the tolerance rule. Do not change the tolerance during collection unless the change is documented and applied to a later window.\n\nReport the results by service line and by payer, because a single complex service can dominate the average. Keep the small-volume groups visible but label them as small samples. The team should be able to repeat the count from the saved files and the same definitions. Save the extract with the review file so a later reviewer can check the grouping. Save the extract with the review file so a later reviewer can check the grouping. Save the extract with the review file so a later reviewer can check the grouping."
      ],
      [
        "Analysis and reporting",
        "Report the verified count, the match count, the close-match count, the miss count, the pending count, and the unverifiable count. Show the match share with its denominator and the observation window. Show the median difference and the share of misses where the final balance was higher. Group the results by service line and payer so the reader can see where the estimate process is weakest.\n\nGive the front desk and the billing lead a decision the review can support, such as changing the estimate script, adding a benefits recheck, or widening the range for a complex service. Do not present the match rate as a measure of patient honesty or staff effort. The data describes the sampled estimates in this practice. If one service line produces most of the misses, test one change and compare the next window.\n\nKeep a short list of the service and payer combinations with the largest differences and the highest volume. Review that list with the estimate owner before the next quarter. Do not change the estimate method and the tolerance in the same month, because the result will be hard to interpret. A small documented change is easier to defend than a broad redesign."
      ],
      [
        "Limitations and use",
        "The result depends on the quality of the benefits data and the timing of the estimate. A patient whose deductible is met between the check and the service may receive a different final balance for a legitimate reason. A practice that documents more carefully may show more misses because the evidence is easier to classify. These limits should travel with the number.\n\nThis protocol is administrative workflow research, not a billing, legal, or compliance determination. It does not establish whether an estimate was accurate enough for a specific patient or whether a balance is collectible. Review any change to the estimate process with the billing lead and the patient-access owner before adoption. Keep the estimate log, the remittance, and the analysis file together. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "Hospital Price Transparency",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/hospital-price-transparency"
      },
      {
        "label": "No Surprises Act",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/nosurprises"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "U.S. Census Bureau",
        "publisher": "U.S. Census Bureau",
        "url": "https://www.census.gov/"
      },
      {
        "label": "GAO Health Care Reports",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/health-care"
      }
    ]
  },
  {
    "slug": "where-does-timely-filing-risk-accumulate-before-claim-submission",
    "title": "Where does timely filing risk accumulate before claim submission?",
    "cluster": "measurement",
    "topic": "timely filing exposure",
    "publishedAt": "2026-11-08",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for timely filing exposure, with one open claim as the unit, a staged delay map, and explicit limits for billing teams.",
    "thumbnail": "/images/november-8/where-does-timely-filing-risk-accumulate-before-claim-submission.webp",
    "heroImage": "/images/november-8/where-does-timely-filing-risk-accumulate-before-claim-submission.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one open claim with a known filing deadline.",
      "Risk is measured as days remaining and as days already spent in each pre-submission stage.",
      "The result maps delay inside one practice, not payer-wide filing performance."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks where timely filing risk accumulates before a claim is submitted. The purpose is to find the stage that consumes the most calendar days while the filing window is running. A claim can be delayed at scheduling, authorization, documentation, coding, charge entry, or clearinghouse review, and each stage has a different owner. The result describes one practice's open claims during a defined window, not the payer's overall filing rules.\n\nThe scope should name the payers, claim types, and filing limits included in the review. State whether the clock runs from the date of service, the discharge date, or another event. Include only claims that have a documented deadline, and list the claims whose deadline is unknown separately. Write the start date and the deadline rule before measuring the stages.\n\nKeep the review inside the administrative boundary. The analysis can show where time is spent, but it should not decide whether a clinical delay was justified. If a claim is waiting on a clinical clarification, record the stage and the owner without judging the decision. That distinction keeps the protocol focused on the process and within the team's authority."
      ],
      [
        "Population and unit of analysis",
        "The unit is one open claim with a filing deadline that falls inside or just after the observation window. If a claim has several lines, count the claim once and record the line count as an attribute. A line-level unit multiplies the same delay across several rows and makes the stage map harder to read. Write the unit decision down and apply it consistently.\n\nThe population is every open claim that meets the scope at the start of the window, plus every new claim that enters during the window. Claims that are submitted before the window ends should stay in the population with their actual submission date. Report the claims that are submitted, the claims still open, and the claims that pass the deadline. Excluding the late claims would hide the outcome the review is meant to find.\n\nLink each unit to the appointment, the authorization record, the documentation status, the coding status, the charge entry date, and the clearinghouse submission date. A reviewer should be able to see the dates for each stage. If a stage date is missing, mark it as missing rather than inferring it from the next stage. Record the source system for each date so the team knows whether the timestamp is reliable."
      ],
      [
        "Definitions and measures",
        "A stage is a period between two recorded events, such as scheduling to authorization or coding to charge entry. The stage duration is the number of calendar days between those events, including weekends and holidays. The remaining window is the number of calendar days from the review date to the filing deadline. A claim is at risk when the remaining window is shorter than the typical time needed to clear the stage that is still open.\n\nThe primary measure is the median and the maximum days spent in each stage, with the claim count beside each stage. A second measure is the share of open claims inside the warning window at the review date. Report the share that ultimately passes the deadline so the reader can see the outcome, not only the early warning. Keep the measures tied to the same unit and the same deadline rule.\n\nA useful companion measure is the share of claims with a missing stage date. That number shows whether the map is complete enough to trust. Report it beside the stage results and do not hide it in a footnote. The missing-date rate is part of the result, not a cleanup detail."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim identifier, the payer, the service date, the deadline rule and its source, the current stage, the stage entry date, and the owner. Record the review date and the person who updated the status. If the stage date comes from a system timestamp, note the system and the time zone. A date copied from a meeting note is weaker than a system record and should be labeled as such.\n\nKeep the filing rule with the claim so the deadline can be checked later. If the payer uses a different limit for corrected claims, record the claim type and the applicable rule. Do not overwrite a missed deadline with a later submission date, because the review needs to see the original timeline. Store the original deadline and the actual submission date as separate fields.\n\nHandle patient and provider information according to the practice privacy and security policies. Use a pseudonymous claim key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the review does not need. The measurement should use the minimum data required to map the delay."
      ],
      [
        "Sampling and collection",
        "Use all open claims in the window when the volume is manageable. If sampling is necessary, draw from the full open-claim list rather than from the claims that are already late. A sample built from late claims will show the end of the process but not where the time accumulated for the claims that were submitted on time. Record the sampling frame, the method, and every exclusion.\n\nReconcile the claim list against the worklist and the clearinghouse report before analysis. Claims with no deadline should be counted in a separate category. Have a second reviewer check a small overlap sample and compare the stage dates. A disagreement rate is useful evidence about the source records. Do not change the stage definitions during collection unless the change is documented and applied to a later window.\n\nUpdate the stage dates at least weekly while the window is open. A single snapshot at the end of the month loses the order of events. If a claim moves backward, such as from coding back to documentation, record the return date and the reason. The map should show the real path, including the loops."
      ],
      [
        "Analysis and reporting",
        "Report the open claim count, the submitted count, the late count, the median days per stage, and the share inside the warning window. Show the stage map in the order the claim actually travels, and label any stage that repeats. Group the results by payer and claim type, because a single payer rule can create a cluster that looks like a team-wide problem. Show the missing-date rate beside the stage results.\n\nGive the billing lead a decision the review can support, such as adding a deadline check at the stage that consumes the most days, moving a handoff earlier, or requesting a payer exception process. Do not present the map as proof that one employee caused the delay. The data describes the sampled claims in this practice. If one stage dominates, test one change and compare the next window. Record the change date so the next review can separate before and after.\n\nKeep a short list of the claims with the least remaining window and the stages that are still open. Review that list with the owners before the next weekly cycle. Do not change the deadline rule and the stage definitions in the same month, because the result will be hard to interpret. The value of the review is the change it enables, not the detail of the chart."
      ],
      [
        "Limitations and use",
        "The map depends on the completeness of the stage dates and the accuracy of the filing rule. A claim may spend time in a stage without a recorded event, which makes the stage look shorter than it was. A payer may also accept a late claim without documenting an exception, which makes the late count look better than the risk. These limits should travel with the result.\n\nThis protocol is administrative workflow research, not a legal, coding, or compliance determination. It does not establish whether a specific claim will be paid or whether a payer should grant an exception. Review any change to the worklist with the billing lead and the compliance owner before adoption. Keep the claim list, the deadlines, and the analysis file together so another reviewer can repeat the map. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Processing Manual",
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
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ]
  },
  {
    "slug": "what-share-of-payer-correspondence-sits-without-a-named-owner",
    "title": "What share of payer correspondence sits without a named owner?",
    "cluster": "measurement",
    "topic": "payer correspondence ownership",
    "publishedAt": "2026-11-08",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for payer correspondence ownership, with one received letter as the unit, a named-owner rule, response clocks, and explicit limits for billing teams.",
    "thumbnail": "/images/november-8/what-share-of-payer-correspondence-sits-without-a-named-owner.webp",
    "heroImage": "/images/november-8/what-share-of-payer-correspondence-sits-without-a-named-owner.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one payer letter or portal notice received in the window.",
      "An owned item has one named person and one target response date.",
      "The result describes the sampled correspondence log, not the payer's service quality."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of payer correspondence sits without a named owner. The purpose is to find letters that are being read but not acted on, and to show whether the response clock is real or aspirational. An owned item has one named person and one target date, even when the work is shared with a team. The result describes one practice's correspondence log during a defined window, not the payer's overall communication quality.\n\nThe scope should name the payers, document types, and intake channels included in the review. State whether the log covers mail, fax, portal messages, and email, or only some of them. Include contract notices, records requests, audit letters, credentialing letters, and payment summaries if the practice treats them as correspondence. Write the document types down before counting so the population does not shift.\n\nKeep the review inside the administrative boundary. The analysis can show ownership and response time, but it should not decide whether a payer notice was legally sufficient or whether a contract term applies. Route those questions to the contracting or compliance owner. The protocol measures the handling process, not the legal meaning of the letter."
      ],
      [
        "Population and unit of analysis",
        "The unit is one payer letter or portal notice received in the window. If a single envelope contains several distinct requests, count each request as a separate unit and record the envelope reference. If a notice is a duplicate of an earlier letter, count it once and record the duplicate in a note. Write the unit decision down and apply it consistently across document types.\n\nThe population is every item that entered the correspondence log in the window, including items that were closed on the day they arrived. Excluding the quick items would overstate the unowned share. Include items that were received before the window but remained open at the start, and mark them as carried over. Report the new and carried-over counts separately.\n\nLink each unit to the payer, the received date, the document type, the referenced provider or claim, the assigned owner, the target date, and the closure date. A reviewer should be able to trace the item from arrival to response. Items without a clear reference should be marked unidentified rather than assigned by guess. Keep the original letter or portal message with the record so the reference can be checked."
      ],
      [
        "Definitions and measures",
        "An owned item has one named person and one target response date at the time of review. An unowned item has no named person, or has a team name without a responsible individual. A pending item is owned but not yet closed. A closed item has a recorded response and a closure date. Use these categories consistently and write an example of each before classification starts.\n\nThe primary measure is the number of unowned items divided by all items in the log at the review date. A second measure is the share of items that passed their target date without a response. Report the median days from receipt to closure for the owned items, because a high ownership rate can still hide slow work. Keep the measures tied to the same unit and the same review date.\n\nA useful companion measure is the share of document types with a written owner mapping. That number shows whether the process is designed or improvised. Report it beside the ownership result and explain the difference. The design measure and the daily result answer related questions and should not be combined into one score."
      ],
      [
        "Evidence standard",
        "Each unit needs the received date, payer, document type, reference, owner, target date, response date, and response reference. If the response was a phone call, record the call date and the representative or reference number. If the letter required no response, record the review decision and the person who made it. A closed item without a response reference is weak evidence for an audit.\n\nKeep the letter or a link to it in the record. Do not rely on a subject line in an inbox or a handwritten note on a desk. If the item was received through a portal, save the message or a confirmation that shows the date. The evidence should let another person understand what arrived and what was done.\n\nHandle patient and provider information according to the practice privacy and security policies. Use a pseudonymous item key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the review does not need. The measurement should use the minimum data required to show ownership and response."
      ],
      [
        "Sampling and collection",
        "Use every item in the correspondence log when the volume is manageable. If sampling is necessary, draw from the full log rather than from the items that were already assigned. A sample built from assigned items will understate the unowned share because it excludes the items nobody picked up. Record the sampling frame, the method, and every exclusion.\n\nReconcile the log against the mail and portal queues before analysis. Items that arrived but were never logged should be counted as a separate finding, not silently added to the population. Have a second reviewer check a small overlap sample and compare the classifications. A disagreement rate is useful evidence about the owner rule. Do not change the definition during collection unless the change is documented and applied to a later window.\n\nRecord the review date and the log extract date. An item may be unowned at one review and owned the next day, so the result is a snapshot. If the practice wants a trend, repeat the snapshot on the same weekday each month. The team should be able to repeat the count from the saved files."
      ],
      [
        "Analysis and reporting",
        "Report the item count, the owned count, the unowned count, the pending count, and the closed count at the review date. Show the unowned share with its denominator and the review date. Show the share past target and the median days to closure. Group the results by document type and payer so the reader can see where the ownership gap sits.\n\nGive the billing lead a decision the review can support, such as adding a named owner to a document type, moving a queue to a different team, or shortening a target date. Do not present the unowned share as proof that the team is careless. The data describes the sampled log in this practice. If one document type dominates, test one change and compare the next month. Record the change date so the next review can separate before and after.\n\nKeep a short list of the oldest unowned items and the owners who are carrying the most open work. Review that list with the billing lead before the next weekly cycle. Do not change the owner mapping and the target dates in the same month, because the result will be hard to interpret. A small documented change is easier to defend than a broad reorganization."
      ],
      [
        "Limitations and use",
        "The result depends on the completeness of the log and the reviewer's ability to see the current owner. A letter may be owned in practice but not recorded, which makes the log look worse than the operation. A team name may function as an owner in a small practice, even though the protocol counts it as unowned. These limits should travel with the number.\n\nThis protocol is administrative workflow research, not a legal, coding, or compliance determination. It does not establish whether a payer notice was valid or whether the practice responded correctly. Review any change to the correspondence process with the billing lead and the compliance owner before adoption. Keep the log, the letters, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
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
        "label": "CMS Administrative Simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      },
      {
        "label": "Health IT Interoperability",
        "publisher": "Office of the National Coordinator for Health IT",
        "url": "https://www.healthit.gov/topic/interoperability"
      }
    ]
  },
  {
    "slug": "how-often-does-a-coding-query-stay-open-past-its-response-target",
    "title": "How often does a coding query stay open past its response target?",
    "cluster": "measurement",
    "topic": "coding query aging",
    "publishedAt": "2026-11-08",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for coding query aging, with one query as the unit, an urgency-based target, a response record, and explicit limits for billing teams.",
    "thumbnail": "/images/november-8/how-often-does-a-coding-query-stay-open-past-its-response-target.webp",
    "heroImage": "/images/november-8/how-often-does-a-coding-query-stay-open-past-its-response-target.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one coding query with a documented target response date.",
      "A late query is open past its target at the review date, regardless of the final answer.",
      "The result describes the sampled query log, not clinician or coder performance."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a coding query stays open past its response target. The purpose is to find where questions wait and whether the target is realistic for the people who answer them. A late query is one that remains open after its target date, even if it is eventually answered. The result describes one practice's query log during a defined window, not the productivity of an individual coder or clinician.\n\nThe scope should name the query types, service lines, and urgency levels included in the review. State whether the log includes queries sent by phone, secure message, and the electronic health record, or only one channel. Include the queries that were closed on the same day, because they still belong in the population. Write the query types down before counting so the population does not shift.\n\nKeep the review inside the administrative boundary. The analysis can show response time, but it should not judge whether the clinical answer was correct. If a query involves a coding or documentation question beyond the team's authority, route it to the qualified reviewer. The protocol measures the handling process, not the clinical decision."
      ],
      [
        "Population and unit of analysis",
        "The unit is one coding query with a documented target response date. If a single query is sent to several people, count it once and record the first recipient and the final responder. If a query is reopened after an answer, count it once and record the reopen date as an attribute. Write the unit decision down and apply it consistently across urgency levels.\n\nThe population is every query that was open at any point in the window, including queries opened before the window and closed during it. Excluding the carried-over items would hide the oldest work. Report the new queries and the carried-over queries separately. Include queries that were withdrawn or cancelled and mark the outcome.\n\nLink each unit to the encounter, the claim, the coder, the recipient, the target date, the response date, and the claim release date. A reviewer should be able to see whether the answer reached the claim. Queries without a claim link should be marked as non-claim queries and reported separately. Record the date the claim moved so the review can compare the answer date with the release date."
      ],
      [
        "Definitions and measures",
        "A late query is one that is still open after its target date at the review date. An answered query has a recorded response and a responder. A released query has a claim that moved after the answer. An unverifiable query has no target date or no response record. Use these categories consistently and write an example of each before classification starts.\n\nThe primary measure is the number of late queries divided by all queries that had a target date and were not closed on time. A second measure is the median days past target for the late items, because a small number of very old queries can be more damaging than a larger number of one-day delays. Report the share of queries that were never answered. Keep the measures tied to the same unit and the same review date.\n\nA useful companion measure is the share of queries with an urgency level. That number shows whether the target dates are assigned deliberately or copied from a default. Report it beside the late rate and explain the difference. The design measure and the outcome measure answer related questions and should not be combined into one score."
      ],
      [
        "Evidence standard",
        "Each unit needs the query date, the target date, the urgency level, the recipient, the response date, the responder, and the claim or encounter reference. If the response came by phone, record the call date and the reference or the name of the person who answered. If the query was answered in the electronic health record, save the message or the note reference. A closed query without a response record is weak evidence.\n\nKeep the original question and the answer together so the reviewer can see what was asked. Do not edit the question after the answer arrives, because that destroys the record of what the clinician actually received. If the query was clarified in a follow-up message, save both messages. The evidence should let another reviewer understand the sequence.\n\nHandle patient and clinical information according to the practice privacy and security policies. Use a pseudonymous query key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the review does not need. The measurement should use the minimum data required to show the response time."
      ],
      [
        "Sampling and collection",
        "Use every query in the log when the volume is manageable. If sampling is necessary, draw from the full log rather than from the queries that were answered. A sample built from answered queries will understate the late rate because it excludes the items that never closed. Record the sampling frame, the method, and every exclusion.\n\nReconcile the query log against the held claims before analysis. A query may be marked closed while the claim still waits, which means the response did not reach the work. Count those items as a separate finding. Have a second reviewer check a small overlap sample and compare the classifications. A disagreement rate is useful evidence about the late rule.\n\nRecord the review date and the log extract date. A query may be late at one review and closed the next day, so the result is a snapshot. If the practice wants a trend, repeat the snapshot on the same weekday each month. The team should be able to repeat the count from the saved files."
      ],
      [
        "Analysis and reporting",
        "Report the query count, the on-time count, the late count, the never-answered count, and the unverifiable count. Show the late share with its denominator and the review date. Show the median days past target and the share of queries with a recorded urgency level. Group the results by query type and recipient role so the reader can see where the delay sits.\n\nGive the coding lead a decision the review can support, such as changing a target, adding a backup responder, or moving a query type to a different channel. Do not present the late rate as a measure of individual effort. The data describes the sampled log in this practice. If one recipient group dominates, test one change and compare the next month. Record the change date so the next review can separate before and after.\n\nKeep a short list of the oldest open queries and the claims closest to their filing deadlines. Review that list with the coding lead before the next weekly cycle. Do not change the target dates and the urgency rules in the same month, because the result will be hard to interpret. A small documented change is easier to defend than a broad redesign."
      ],
      [
        "Limitations and use",
        "The result depends on the completeness of the query log and the accuracy of the target dates. A query may be answered verbally and never recorded, which makes the log look later than the work. A target may be unrealistic for the clinical schedule, which makes the late rate a measure of design rather than effort. These limits should travel with the number.\n\nThis protocol is administrative workflow research, not a coding, clinical, legal, or compliance determination. It does not establish whether a query was necessary or whether the answer was correct. Review any change to the query process with the coding lead and the clinical owner before adoption. Keep the log, the messages, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
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
        "label": "Health IT Interoperability",
        "publisher": "Office of the National Coordinator for Health IT",
        "url": "https://www.healthit.gov/topic/interoperability"
      },
      {
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "what-share-of-clean-claims-pass-on-the-first-submission",
    "title": "What share of clean claims pass on the first submission?",
    "cluster": "measurement",
    "topic": "first-pass clean claims",
    "publishedAt": "2026-11-08",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for first-pass clean claims, with one submitted claim as the unit, a fixed definition, a stable denominator, and explicit limits for billing teams.",
    "thumbnail": "/images/november-8/what-share-of-clean-claims-pass-on-the-first-submission.webp",
    "heroImage": "/images/november-8/what-share-of-clean-claims-pass-on-the-first-submission.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one claim submitted for the first time in the window.",
      "A first-pass clean claim is accepted with no rejection or required correction.",
      "The result describes the sampled submission base, not an industry benchmark."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of claims pass on the first submission without a rejection or a required correction. The purpose is to measure the front-end process the team controls, not the payer's final payment decision. A clean claim in this protocol is accepted by the clearinghouse or payer on the first attempt and needs no data correction before adjudication. The result describes one practice's submission base during a defined window, not an industry benchmark.\n\nThe scope should name the payers, claim types, and submission channels included in the review. State whether the base includes claims that were never submitted because they were held or cancelled. Include the claims that were submitted and later denied for a payment reason, because a denial is not the same as a submission defect. Write the inclusion rules down before looking at the result.\n\nKeep the review inside the administrative boundary. The analysis can show whether a claim was accepted, but it should not decide whether the service was covered or the payment was correct. If a claim is denied for a clinical or benefits reason, route it to the denial workflow. The protocol measures the submission process, not the final adjudication."
      ],
      [
        "Population and unit of analysis",
        "The unit is one claim submitted for the first time in the window. If a claim is corrected and resubmitted, count the original submission once and record the correction as an attribute. Do not count the resubmission as a new first-pass opportunity. Write the unit decision down and apply it consistently across payers and channels.\n\nThe population is every first submission in the window, including claims that were rejected and claims that are still pending at the review date. Excluding the pending claims would make the rate look better than the operation. Report the pending count beside the rate so the reader can see how much of the base is unresolved. Include claims submitted through a clearinghouse and directly through a payer portal, but report the channels separately.\n\nLink each unit to the claim identifier, the payer, the submission date, the clearinghouse acceptance, the first rejection if any, and the correction date. A reviewer should be able to see whether the claim needed a change. Claims without a submission record should be marked unverifiable rather than counted as clean. Keep the original acceptance report with the claim so the first submission can be checked later."
      ],
      [
        "Definitions and measures",
        "A first-pass clean claim is accepted on the first submission with no rejection and no required data correction. A corrected claim is one that needed a change before it could adjudicate. A rejected claim is one the clearinghouse or payer refused at the front end. A pending claim is one with no acceptance or rejection at the review date. Use these categories consistently and write an example of each before classification starts.\n\nThe primary measure is the number of first-pass clean claims divided by all submitted claims with a known outcome. Show the pending count and the unverifiable count beside it. A second measure is the share of claims that needed a correction, grouped by the field that caused the correction. Report the correction reasons because the rate alone does not tell the team what to fix.\n\nA useful companion measure is the share of claims submitted with all required attachments. That number shows whether the front-end check is complete and helps explain the clean rate. Report it beside the primary result and do not combine the two into one score. The process measure and the outcome measure answer different questions."
      ],
      [
        "Evidence standard",
        "Each unit needs the claim identifier, the payer, the submission date and time, the clearinghouse or payer acceptance, the first rejection code if any, and the correction date and reason. Record the person or system that submitted the claim. If the acceptance is a batch-level report, keep the file and the claim-level detail together. A batch acceptance without the claim detail is weak evidence for a clean-claim count.\n\nKeep the original submission separate from any resubmission. A later acceptance does not prove that the first submission was clean. If the claim was corrected, record the field that changed and the source of the corrected value. Store the evidence with the claim so a reviewer can trace the path. The record should show what the payer received the first time.\n\nHandle patient and provider information according to the practice privacy and security policies. Use a pseudonymous claim key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the review does not need. The measurement should use the minimum data required to classify the submission."
      ],
      [
        "Sampling and collection",
        "Use all first submissions in the window when the volume is manageable. If sampling is necessary, draw from the full submission file rather than from the claims that were accepted. A sample built from accepted claims will overstate the clean rate because it excludes the rejected and pending items. Record the sampling frame, the method, and every exclusion.\n\nReconcile the submission file against the clearinghouse report and the accounts receivable system before analysis. Claims missing from one source should be counted, not dropped. Have a second reviewer check a small overlap sample and compare the classifications. A disagreement rate is useful evidence about the definition. Do not change the definition during collection unless the change is documented and applied to a later window.\n\nReport the results by payer and submission channel, because a single channel can dominate the rate. Keep the small-volume groups visible but label them as small samples. The team should be able to repeat the count from the saved files and the same definitions. Save the extract with the review file so a later reviewer can check the grouping."
      ],
      [
        "Analysis and reporting",
        "Report the submitted count, the clean count, the corrected count, the rejected count, the pending count, and the unverifiable count. Show the clean share with its denominator and the observation window. Show the top correction reasons and the share of claims with complete attachments. Group the results by payer and channel so the reader can see where the front end is weakest.\n\nGive the billing lead a decision the review can support, such as fixing a field at registration, adding a check before submission, or changing a clearinghouse rule. Do not present the rate as a measure of individual effort. The data describes the sampled submissions in this practice. If one correction reason dominates, test one change and compare the next window. Record the change date so the next review can separate before and after.\n\nKeep a short list of the correction reasons with the highest volume and the longest delay. Review that list with the submission owner before the next month. Do not change the definition and the edit set in the same month, because the result will be hard to interpret. A small documented change is easier to defend than a broad cleanup."
      ],
      [
        "Limitations and use",
        "The result depends on the completeness of the submission file and the accuracy of the acceptance records. A payer may accept a claim and later reject it during adjudication, which blurs the line between a clean claim and a denial. A clearinghouse may also correct a field silently, which makes the first submission look cleaner than the data the practice sent. These limits should travel with the number.\n\nThis protocol is administrative workflow research, not a coding, legal, or compliance determination. It does not establish whether a claim was payable or whether a denial was correct. Review any change to the submission process with the billing lead and the compliance owner before adoption. Keep the submission file, the acceptance reports, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
      ]
    ],
    "sources": [
      {
        "label": "CMS Administrative Simplification",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/regulations-guidance/administrative-simplification"
      },
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
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
    "slug": "how-much-of-the-denial-prevention-huddle-produces-a-documented-change",
    "title": "How much of the denial prevention huddle produces a documented change?",
    "cluster": "measurement",
    "topic": "denial huddle follow-through",
    "publishedAt": "2026-11-08",
    "sourceCount": 5,
    "excerpt": "A local measurement protocol for denial huddle follow-through, with one huddle decision as the unit, a documentation rule, a verification date, and explicit limits for billing teams.",
    "thumbnail": "/images/november-8/how-much-of-the-denial-prevention-huddle-produces-a-documented-change.webp",
    "heroImage": "/images/november-8/how-much-of-the-denial-prevention-huddle-produces-a-documented-change.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one huddle decision with a named owner and a stated change.",
      "A documented change has a start date and a verifiable effect on the workflow.",
      "The result describes the sampled huddle record, not team engagement or intent."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how much of the denial prevention huddle produces a documented change. The purpose is to separate a useful conversation from a meeting that ends with good intentions and no follow-through. A documented change has a named owner, a start date, and a verifiable effect on a workflow or a rule. The result describes one practice's huddle record during a defined window, not the engagement or effort of the team.\n\nThe scope should name the huddle cadence, the denial reasons discussed, and the date range included in the review. State whether the record includes only the top five reasons or every reason that came up. Include the changes that were proposed and rejected, because a rejected proposal is still a decision. Write the inclusion rules down before reviewing the notes.\n\nKeep the review inside the administrative boundary. The analysis can show whether a change was documented and verified, but it should not judge whether the change was clinically or financially correct. Route those questions to the billing lead and the qualified owner. The protocol measures follow-through, not the quality of the decision itself."
      ],
      [
        "Population and unit of analysis",
        "The unit is one huddle decision with a stated change or a stated decision not to change. If one reason produces several actions, count each action separately and record the reason. If a decision is carried forward for several weeks without a change, count it once and record the carry-forward dates as attributes. Write the unit decision down and apply it consistently.\n\nThe population is every decision recorded in the huddle notes during the window, including decisions that were later reversed. Excluding the reversals would overstate follow-through. Report the new decisions and the carried-forward decisions separately. Include decisions that were assigned to a person outside the huddle, because those are the ones most likely to stall.\n\nLink each unit to the denial reason, the huddle date, the owner, the proposed change, the start date, the verification date, and the result. A reviewer should be able to trace the decision from the meeting to the workflow. Decisions without an owner should be marked unassigned rather than counted as complete. Keep the original huddle note with the record so the decision can be checked against what was said."
      ],
      [
        "Definitions and measures",
        "A documented change has a named owner, a start date, a description of the workflow or rule changed, and a verification note. A proposed change has an owner but no start date or verification. A rejected proposal has a recorded reason and no action. A carried-forward item has no decision yet. Use these categories consistently and write an example of each before classification starts.\n\nThe primary measure is the number of documented changes divided by all decisions in the window. A second measure is the share of documented changes that have a verification note within the stated review period. Report the median days from huddle to start, because a change that begins months later is not really a huddle outcome. Keep the measures tied to the same unit and the same window.\n\nA useful companion measure is the share of decisions that were assigned to an owner outside the huddle. That number shows whether the meeting is creating work for people who never agreed to it. Report it beside the follow-through result and explain the difference. The ownership measure and the completion measure answer related questions and should not be combined into one score."
      ],
      [
        "Evidence standard",
        "Each unit needs the huddle date, the denial reason, the decision, the owner, the start date, the workflow or rule changed, and the verification note. If the change was a field update, save the field name and the system. If the change was a script or a training step, save the version and the date. A verbal agreement without a record is not a documented change.\n\nKeep the huddle notes and the verification evidence together. A change may be real but undocumented, which makes the follow-through rate look lower than the work. Do not reconstruct a missing record from memory after the review begins. Mark the item as unverifiable and report the count. The evidence should let another reviewer see what changed and when.\n\nHandle patient and provider information according to the practice privacy and security policies. Use a pseudonymous decision key in the analysis file and keep the crosswalk in an approved system. Do not copy clinical detail that the review does not need. The measurement should use the minimum data required to show the decision and the change."
      ],
      [
        "Sampling and collection",
        "Use every huddle decision in the window when the volume is manageable. If sampling is necessary, draw from the full decision list rather than from the changes that were completed. A sample built from completed changes will overstate follow-through because it excludes the items that stalled. Record the sampling frame, the method, and every exclusion.\n\nReconcile the huddle notes against the workflow records before analysis. A change may be marked complete in the notes while the field or script was never updated. Count those items as a separate finding. Have a second reviewer check a small overlap sample and compare the classifications. A disagreement rate is useful evidence about the definition of a documented change.\n\nRecord the review date and the source of each note. A decision may be carried forward across several huddles, so the review should use the first date and the latest status. The team should be able to repeat the count from the saved notes and the workflow records. Store the notes in one place so a later reviewer does not have to search several folders."
      ],
      [
        "Analysis and reporting",
        "Report the decision count, the documented change count, the proposed count, the rejected count, the carried-forward count, and the unverifiable count. Show the follow-through share with its denominator and the observation window. Show the median days from huddle to start and the share with a verification note. Group the results by reason and owner role so the reader can see where decisions stall.\n\nGive the billing lead a decision the review can support, such as shortening the carry-forward limit, requiring a verification date at the meeting, or moving a decision to a different owner. Do not present the follow-through rate as a measure of team commitment. The data describes the sampled huddle record in this practice. If one reason dominates the stalled items, test one change and compare the next month. Record the change date so the next review can separate before and after.\n\nKeep a short list of the carried-forward decisions with the oldest dates and the owners who are holding them. Review that list with the billing lead before the next huddle cycle. Do not change the meeting format and the definition in the same month, because the result will be hard to interpret. A small documented change is easier to defend than a broad overhaul."
      ],
      [
        "Limitations and use",
        "The result depends on the quality of the huddle notes and the reviewer's ability to find the workflow change. A team may make real improvements without writing them down, which makes the rate look worse than the work. A change may also be documented but never adopted, which makes the rate look better than the operation. These limits should travel with the number.\n\nThis protocol is administrative workflow research, not a financial, coding, or compliance determination. It does not establish whether a denial reason was correctly identified or whether a change reduced denials. Review any change to the huddle process with the billing lead and the compliance owner before adoption. Keep the notes, the workflow evidence, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability rather than forcing a precise-looking rate."
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
        "label": "GAO Green Book",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "label": "National Correct Coding Initiative Edits",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
      }
    ]
  }
];
