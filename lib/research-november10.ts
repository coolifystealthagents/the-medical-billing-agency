import type { BlogPost, ResearchPost } from './blog-november5-types';

export const november10Research: ResearchPost[] = [
  {
    "slug": "what-share-of-collection-agency-referrals-include-a-complete-documentation-packet",
    "title": "What share of collection agency referrals include a complete documentation packet?",
    "cluster": "measurement",
    "topic": "collection referrals",
    "publishedAt": "2026-11-10",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for collection agency referrals, using one placed account as the unit, a completeness checklist, and explicit limits for billing teams.",
    "thumbnail": "/images/november-10/what-share-of-collection-agency-referrals-include-a-complete-documentation-packet.webp",
    "heroImage": "/images/november-10/what-share-of-collection-agency-referrals-include-a-complete-documentation-packet.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one patient account placed with a collection agency.",
      "A complete packet has the balance math, claim history, contact log, and signed responsibility evidence.",
      "The result describes one practice’s placement quality, not an agency’s performance."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of accounts sent to a collection agency include every document the practice requires before placement. The result describes the quality of one practice’s referral packet during a defined window. It does not measure how much the agency collected or whether the patient agreed with the debt. Those are separate questions with different evidence. Define the placement window and the account types before the first account is reviewed. Include patient balances, self-pay accounts, and any payer balance the practice is permitted to place. Exclude accounts recalled before the agency received them and accounts still in an open appeal. Write the inclusions and exclusions down so the denominator does not change during the review.\n\nThe review should also state who performs the scoring and whether that person can see the agency’s collection notes. A reviewer who sees the outcome may unintentionally grade the packet more generously. Keep the packet review separate from the collection result. If the practice uses an outside reviewer, give them the checklist and the documents, not the agency’s performance report."
      ],
      [
        "Population and unit of analysis",
        "The unit is one account placed with the agency on a specific date. Record the account key, the placement date, the balance, the service dates, and the agency name. If one guarantor has several accounts placed separately, count each placement as its own unit. Combining them would hide which packet was incomplete. The population is every account in the placement file for the window, including accounts the agency later returned. Excluding returns after the fact would overstate completeness because a returned account often signals a packet problem. Report both the account count and the dollar value so a few large balances cannot hide a long tail. Keep the crosswalk between the analysis key and the account in an approved system.\n\nReport accounts that were placed and then recalled within the window, because a recall often means the packet or the balance changed after placement. Count them in the population and label the recall reason. If an account was placed twice, use the first placement for the unit and note the second. The analysis should not let a re-placement hide an earlier defect."
      ],
      [
        "Definitions and measures",
        "A complete packet has four parts: a reconciled balance calculation, the claim and payment history, a dated patient contact log, and the signed financial responsibility or assignment document. A partially complete packet has at least one part missing but enough evidence to place the account. An incomplete packet is missing two or more parts or contains an unresolved balance error. The primary measure is the number of complete packets divided by all accounts placed in the window. Report the partial and incomplete counts beside it. A second measure is the dollar value of complete packets divided by the total dollars placed, because a small number of large incomplete packets can matter more than the item count. Report the most common missing part for each group.\n\nAdd a measure for the time from placement to the agency’s first acknowledgment. A packet can be complete and still sit at the agency without being worked. Report the acknowledgment date separately from the placement date. That timing helps the practice distinguish a documentation problem from a handoff problem."
      ],
      [
        "Evidence standard",
        "Each unit needs the placement date, the balance at placement, the last statement date, and the contact log. Attach the claim history that shows how the balance was calculated, including payer payments and patient payments. Record the name of the staff member who approved the placement and the rule applied. A placement without an approval record is weak evidence even when the balance is correct. Keep the original documents separate from the audit worksheet. If a document was added after placement, record the date it was added and who requested it. Do not accept a reconstructed contact log without the underlying call or portal record. The audit should distinguish what existed at placement from what the team created later.\n\nUse a document index that lists each required part and the date it was added to the file. The index makes the review faster and shows whether a document was present at placement or added later. If a document is stored in a different system, record the system and the record identifier. The reviewer should not have to search multiple folders to reconstruct one packet."
      ],
      [
        "Sampling and collection",
        "Use every placement when the volume is manageable. If sampling is necessary, draw from the full placement file before any account is returned or closed. A sample built only from active accounts will miss the returns that often reveal incomplete packets. Record the sampling frame, the method, and every exclusion. Reconcile the placement file with the practice ledger and the agency acceptance report before analysis. Accounts that appear in one record but not the other should be counted and investigated. Have a second reviewer score a small overlap sample and compare the results. A disagreement rate shows whether the checklist is clear enough to be repeated.\n\nIf the practice uses multiple agencies, sample within each agency so one large file does not dominate the result. Report the agency-level counts separately and then combine them only when the definitions match. A pooled rate can hide a serious problem at one agency. Keep the agency name in the analysis key so the split can be reproduced."
      ],
      [
        "Analysis and reporting",
        "Report the placed count, the complete count, the partial count, and the incomplete count with the share for each. Add the dollars placed and the dollars in incomplete packets. Show the missing-part counts, such as contact log, claim history, signature, and balance support. These details tell the billing lead which template field or process step needs attention. Group the results by agency, by placement batch, and by staff member when the group sizes are large enough to protect privacy. A single batch or a single preparer may account for most defects. Give the reader a decision the data can support, such as pausing placements until a template is fixed or adding a second review before the file is sent.\n\nAdd a short table of the most common defects and the process step where each defect enters. A missing contact log may start at the front desk, while a balance error may start in posting. The table turns the rate into a work plan. Share it with the owners of those steps, not only with the billing manager."
      ],
      [
        "Limitations and use",
        "The measure depends on the checklist being applied consistently and on the documents being available in the record. A packet may be complete in substance but missing a scan, which the audit will count as incomplete. Report those cases separately if the distinction matters. The result describes documentation quality, not whether the underlying debt is valid. Collection work is regulated, and the practice should review its placement agreement and patient communications with qualified counsel. This protocol is an administrative review, not a legal opinion. Keep the placement file, the checklist, and the audit worksheet together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability honestly.\n\nA complete packet does not guarantee a valid debt, and an incomplete packet does not prove the debt is wrong. The practice should separate documentation quality from account validity in its conclusions. If a patient disputes the debt, use the underlying claim and payment records rather than the audit score. The protocol is a management tool, not a legal finding."
      ],
      [
        "Reviewer worksheet",
        "Keep a one-page worksheet beside each packet review with the four required parts and a yes, no, or not-applicable mark. Add a short note for every no so the defect can be understood later. The worksheet should take less than ten minutes per account. If it takes longer, the checklist is too complicated or the file is disorganized. At the end of the review, give the placement team a clean list of missing items and a deadline to complete them. Do not leave the list in the audit file without an owner. A packet fixed before the next placement prevents the same defect from repeating. The worksheet becomes a coaching tool when it is shared promptly."
      ]
    ],
    "sources": [
      {
        "label": "Debt collection and credit practices",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/credit-finance/debt-collection"
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
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ]
  },
  {
    "slug": "how-often-does-point-of-service-cash-match-the-end-of-day-deposit",
    "title": "How often does point-of-service cash match the end-of-day deposit?",
    "cluster": "measurement",
    "topic": "point-of-service cash",
    "publishedAt": "2026-11-10",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for point-of-service cash, using one business day as the unit, a reconciled deposit rule, and explicit limits for practice managers.",
    "thumbnail": "/images/november-10/how-often-does-point-of-service-cash-match-the-end-of-day-deposit.webp",
    "heroImage": "/images/november-10/how-often-does-point-of-service-cash-match-the-end-of-day-deposit.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one business day of point-of-service collections.",
      "A match means the drawer, the day sheet, and the deposit agree by payment method.",
      "The result describes one practice’s cash control, not a benchmark for other offices."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often the point-of-service cash collected in one business day matches the end-of-day deposit after reconciliation. The result describes one practice’s cash handling during a defined period. It does not measure whether every patient payment was posted to the correct account, although a match makes that more likely. Define the collection points included in the review, such as the front desk, the checkout window, and any satellite location. Decide whether card payments, checks, and cash are counted separately or together. State the business days included and exclude days when the office was closed or the practice management system was unavailable. Write the rules before the first day is reviewed.\n\nInclude the practice’s refund and void activity in the scope, because a refund can make the drawer and the deposit disagree for a legitimate reason. State whether refunds are counted on the date they are paid or the date they are posted. Record the void reason and the original receipt number so the reviewer can trace the change. A clear rule prevents the reviewer from treating a timing difference as a control failure."
      ],
      [
        "Population and unit of analysis",
        "The unit is one business day at one collection location. Record the date, the location, the opening drawer amount, the collections by method, the deposit amount, and the person who closed the drawer. If a location has two shifts, treat the day as one unit but keep the shift counts separately. This preserves the daily control question while showing where a difference began. The population is every business day in the window, including days with a known difference. Excluding days with differences would inflate the match rate and hide the pattern the review is meant to find. Report the number of days and the total dollars collected. Keep the daily sheets and deposit records together so the unit can be rebuilt.\n\nRecord the practice management system’s close time and the bank’s deposit cut-off for each unit. A deposit made after the cut-off may appear on the next bank statement even when the office closed on time. That is a banking timing issue, not a drawer variance. Keeping both times makes the classification defensible."
      ],
      [
        "Definitions and measures",
        "A match means the cash, checks, and card batch totals on the day sheet equal the reconciled drawer and the deposit by method. A timing difference means the deposit cleared on the next business day but the amount and method are correct. A variance means at least one method differs by any amount, even if the total happens to balance. The primary measure is the number of matched days divided by all business days reviewed. Report timing differences separately from variances, because they represent a different control question. Add the dollar value of variances and the number of days with more than one variance. Report the most common method involved, since card and cash differences usually have different causes.\n\nAdd a measure for the number of days with a receipt-number gap, even when the cash matches. A drawer can balance while a payment is missing a receipt, which weakens the audit trail. Report the gap count beside the match rate. The two measures together describe both the cash and the record."
      ],
      [
        "Evidence standard",
        "Each unit needs the signed day sheet, the drawer count, the deposit slip or electronic deposit record, and the practice management payment report. Record the names of the counter and the second counter when the practice uses one. Attach the processor settlement report for card totals rather than relying on the terminal screen alone. Keep the records in the order they were created and note any later correction. A day sheet rewritten after the deposit is weaker evidence than one completed at close. If a payment was voided or reversed the next day, record the date and the reason. The audit should show what the team knew at close, not only what the ledger shows later.\n\nKeep the original deposit slip and the bank confirmation together. If the practice uses a remote deposit scanner, save the batch report with the image reference. A deposit total without a bank record is only an intention. The reviewer should be able to trace the day’s cash to a posted bank credit."
      ],
      [
        "Sampling and collection",
        "Use every business day in the window when the practice can produce the records. If sampling is necessary, draw from the full calendar and include weekends, early closures, and days with high patient volume. A sample of quiet Tuesdays will not show the pressure points that produce most differences. Record the sampling frame and method. Reconcile the daily deposit total with the bank statement before scoring the days. A deposit that never reached the bank is a different problem from a drawer that did not balance. Have a second reviewer recalculate a small overlap sample and compare the results. Disagreements about what counts as a timing difference should be resolved in the written definitions.\n\nWhen records are missing, mark the day as unverifiable instead of excluding it. Report the unverifiable count and the reason. If a location cannot produce daily sheets for several days, treat that as a finding about the control environment. The missing record is itself evidence of a process gap."
      ],
      [
        "Analysis and reporting",
        "Report the days reviewed, the matched days, the timing differences, and the variance days. Add the total dollars collected, the dollars in variance, and the largest single variance. Show the results by location, by day of week, and by closer when the groups are large enough. A pattern by closer or by day is more actionable than a single monthly percentage. Give the practice manager a short list of causes and controls, such as a second count, a card settlement check, or a receipt-number requirement. Do not present the match rate as proof that every payment was posted correctly. The measure answers a narrower question about cash control, and the report should say so.\n\nShow the variance distribution, not only the average. One large variance and many small ones tell different stories. Report the median and the largest variance beside the total. Averages can hide a single event that deserves a separate review."
      ],
      [
        "Limitations and use",
        "The result depends on the accuracy of the day sheet and the deposit record. A day can match at the total level while two methods are wrong in opposite directions, which is why the method-level check matters. Small differences may be rounding or bank fees, so define the tolerance in advance. Report the tolerance beside the rate. Cash handling controls should follow the practice’s financial policies and any payer or banking requirements. This protocol is an administrative review, not an audit opinion. Keep the daily records and the analysis file together so another reviewer can repeat the count. If records are missing for a day, count it as unverifiable rather than assuming a match.\n\nA matched day does not prove that every payment posted to the right patient. The cash control and the posting accuracy are related but separate. If the practice needs assurance on posting, add a claim-level sample. State clearly which question the report answers so readers do not overread the result."
      ],
      [
        "Reviewer worksheet",
        "Build a daily worksheet with the opening drawer, collections by method, refunds, corrections, the expected deposit, the actual deposit, and the difference. Add a line for the receipt-number range used that day. The range makes it easy to spot a missing receipt during the count. Keep the worksheet with the deposit record. At the end of the month, summarize the worksheets into a one-page control report. Include the match rate, the variance dollars, the top causes, and the status of each open item. Send it to the practice manager and the finance owner. A short monthly summary is easier to act on than a folder of daily sheets."
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
        "label": "Manage a business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ]
  },
  {
    "slug": "how-long-do-payer-refund-requests-sit-before-the-practice-responds",
    "title": "How long do payer refund requests sit before the practice responds?",
    "cluster": "measurement",
    "topic": "payer refund requests",
    "publishedAt": "2026-11-10",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for payer refund requests, using one request as the unit, a response-date rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-10/how-long-do-payer-refund-requests-sit-before-the-practice-responds.webp",
    "heroImage": "/images/november-10/how-long-do-payer-refund-requests-sit-before-the-practice-responds.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one payer refund request received on a specific date.",
      "Response time runs from receipt to the first written answer, not to the refund check.",
      "The result describes one practice’s response queue, not payer accuracy."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how long payer refund requests wait before the practice sends a written response. The result describes one practice’s refund queue during a defined window. It does not measure whether the payer’s request was correct or whether the refund was ultimately issued. Those outcomes require a separate claim-level review. Define the request types included, such as duplicate payment notices, overpayment letters, and electronic refund requests. Decide whether requests that arrive without a claim number are counted in the main population or tracked separately. State the receipt date source, such as the mail log or the payer portal timestamp. Write the scope before the first request is scored.\n\nState whether requests received after the practice’s normal business hours count on the same day or the next business day. A consistent convention matters more than the choice itself. Record the time zone used for portal timestamps. A mismatch between the payer’s time zone and the practice’s can shift a response by a day."
      ],
      [
        "Population and unit of analysis",
        "The unit is one refund request tied to one claim or one payment. Record the payer, the claim number, the amount requested, the receipt date, and the assigned owner. If a single letter covers several claims, count each claim as a separate unit and note the shared letter. This keeps the response measure tied to the work the team must actually verify. The population is every request received in the window, including requests that were later withdrawn or found invalid. Excluding them would shrink the denominator and overstate speed. Report the number of requests and the dollars requested. Keep the original notice and the response together so the unit can be reconstructed.\n\nRecord the request channel, such as mail, fax, portal, or clearinghouse notice. The channel often explains the delay, because a fax may sit in a queue while a portal notice reaches an inbox. Report the channel with each unit. The practice can then fix the slowest intake path rather than the whole process."
      ],
      [
        "Definitions and measures",
        "The response date is the date the practice sends its first written answer, whether it agrees, disputes, or asks for more information. A phone call does not count unless the practice also sends a written record. The resolution date is the date the refund is posted or the dispute is closed. Measure both, but do not substitute one for the other. The primary measure is the median days from receipt to written response. Report the share answered within the practice’s stated target, such as ten business days. Add the share answered within the payer’s deadline and the count of requests still open past the target. Report the dollars represented by late responses so a few large requests are visible.\n\nAdd a measure for the time from response to resolution. A fast response followed by a slow refund still leaves the payer waiting. Report the two intervals separately and the count that moved from response to resolution within the practice target. The pair gives a more complete picture than either number alone."
      ],
      [
        "Evidence standard",
        "Each unit needs the original request, the receipt date, the claim and remittance, the response letter, and the send date. Record the owner and any internal review date. If the practice asked the payer for more information, attach that request and the payer’s reply. A response without a send record is difficult to verify and should be marked unconfirmed. Keep the refund posting separate from the response evidence. A request can be answered promptly and still take weeks to resolve, and the report should show both stages. If the practice used a phone call, record the reference number and the representative’s name. The written record remains the primary evidence for the response measure.\n\nIf the practice responds through a portal, save the confirmation page or the sent-message record. A screenshot without a timestamp is weaker than an exported message. Record the payer reference number from the response. When the payer acknowledges receipt, attach that acknowledgment to the unit."
      ],
      [
        "Sampling and collection",
        "Use every request in the window when the volume is manageable. If sampling is necessary, draw from the full intake log before any request is closed or withdrawn. A sample of resolved requests will overstate speed because slow requests are still open. Record the sampling frame, the method, and every exclusion. Reconcile the intake log with the refund ledger and the payer portal before analysis. Requests that appear in one source but not the other should be counted and investigated. Have a second reviewer check a small overlap sample. A disagreement rate helps show whether receipt dates and response dates are being recorded consistently.\n\nCheck whether the intake log includes requests that arrived before the window but were discovered during it. Those should be counted in a separate discovery group, not mixed into the response population. The distinction shows whether the practice has an intake problem or a response problem. Report both groups."
      ],
      [
        "Analysis and reporting",
        "Report the requests received, the requests answered, the median days to response, and the count past target. Add the median days to resolution and the dollars requested. Show the results by payer and by request type, because one payer’s portal may create most of the delay. Keep the group counts beside the rates so small groups are not overread. Give the billing lead a decision the data can support, such as assigning a daily intake owner or setting an automatic reminder at day five. Do not present the median as proof that every response was correct. The measure describes speed, and a separate sample should review the quality of the answers.\n\nPlot the age of open requests at the end of each week. The median response time can look healthy while a small set of old requests grows. Report the oldest open request and its dollar amount. That number often motivates action more than an average."
      ],
      [
        "Limitations and use",
        "The result depends on receipt dates being captured when the request arrives. A request discovered late in an inbox may look fast after discovery but slow in reality. Report the discovery date and the receipt date separately when both exist. Otherwise the measure describes the queue’s response after discovery, not the payer’s wait. Payer refund rules and deadlines vary, and the practice should confirm them with the payer and qualified billing counsel. This protocol is administrative workflow research, not a legal determination. Keep the intake log, the responses, and the analysis file together so another reviewer can repeat the count. If the records cannot support a stable conclusion, report that honestly.\n\nA written response is not the same as a correct response. The protocol measures speed and documentation, not the quality of the decision. Pair it with a sample review of the responses. If the practice cannot produce the sent records, the measured speed is incomplete."
      ],
      [
        "Reviewer worksheet",
        "Use a worksheet with the request date, the payer deadline, the owner, the evidence checked, the response date, and the resolution date. Add a column for the reason the request was approved or disputed. The reason column turns the log into a source of process insight, not only a timer. Review the worksheet weekly and move any request approaching its deadline to the top of the queue. Ask the owner for a status note when a request has no activity for three business days. The weekly review should take fifteen minutes when the intake log is current. Escalate only the requests that are genuinely stuck.\n\nKeep the response templates next to the worksheet so the owner does not rewrite the same explanation each time. A template should have placeholders for the claim number, the amount, and the evidence reviewed. Review the templates once a year against the payer rules. A good template shortens the response without making it generic."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Claims appeals",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/claims-appeals"
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
      }
    ]
  },
  {
    "slug": "what-share-of-corrected-claims-pay-on-the-first-resubmission",
    "title": "What share of corrected claims pay on the first resubmission?",
    "cluster": "measurement",
    "topic": "corrected claims",
    "publishedAt": "2026-11-10",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for corrected claims, using one replacement claim as the unit, a first-resubmission payment rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-10/what-share-of-corrected-claims-pay-on-the-first-resubmission.webp",
    "heroImage": "/images/november-10/what-share-of-corrected-claims-pay-on-the-first-resubmission.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one corrected claim resubmitted for an original claim.",
      "A first-resubmission payment means the replacement pays before any second correction.",
      "The result describes one practice’s correction quality, not a payer benchmark."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of corrected claims pay on the first resubmission after the original claim was denied or reprocessed. The result describes one practice’s correction workflow during a defined window. It does not measure whether the original denial was correct or whether the final payment matched the contract. Those questions need a separate review. Define the correction types included, such as code changes, modifier changes, diagnosis corrections, and payer-order fixes. Decide whether claims corrected only for a demographic field are included. State the window by resubmission date rather than original submission date. Write the rules before the first claim is scored.\n\nInclude claims corrected after a patient complaint or a practice audit, not only claims corrected after a payer denial. Those corrections test a different part of the workflow. State whether the review covers professional claims, institutional claims, or both. Mixing claim types can obscure a pattern that belongs to one billing system."
      ],
      [
        "Population and unit of analysis",
        "The unit is one replacement claim linked to one original claim. Record the original claim number, the replacement number, the correction reason, the resubmission date, and the payer. If one original claim produces several replacement lines, count the claim as one unit and note the line changes. This keeps the measure tied to the resubmission decision. The population is every corrected claim resubmitted in the window, including claims that were rejected before adjudication. Excluding clearinghouse rejections would overstate the payment rate because a rejected claim never had a chance to pay. Report the count and the dollars submitted. Keep the original and replacement records linked in the analysis file.\n\nRecord whether the original claim paid anything before the correction. A claim that paid partially and then was corrected has a different starting point from a claim that denied at zero. Report the two groups separately. The payment rate can differ substantially between them."
      ],
      [
        "Definitions and measures",
        "A first-resubmission payment means the replacement claim paid at least one line before any second correction or appeal. A partial payment counts as paid, but report the paid amount and the remaining balance separately. A denial, a rejection, or a zero-pay remittance does not count as payment even if the claim was accepted. The primary measure is the number of first-resubmission payments divided by all corrected claims resubmitted. Report the rejection count and the denial count beside it, because the fix differs. Add the median days from resubmission to payment and the dollars paid. A high payment rate with a long lag is a different result from a fast, low rate.\n\nAdd a measure for the number of correction cycles per original claim. A claim that needed three replacements is a different result from one that needed a single correction. Report the median cycles and the maximum. The count shows whether the team is converging on the right answer or guessing."
      ],
      [
        "Evidence standard",
        "Each unit needs the original claim, the denial or reprocess notice, the replacement claim, and the remittance. Record the correction made and the person who approved it. If the correction involved a code or modifier, attach the documentation or coding note that supports it. A replacement claim without a documented reason is difficult to evaluate. Keep the original remittance separate from the replacement remittance so the reviewer can see what changed. If the payer requested additional information, record the request and the response date. Do not count a claim as paid based on a portal status alone; use the remittance or the payment posting. The evidence should let another reviewer repeat the classification.\n\nKeep the payer acknowledgment for the replacement claim when one exists. The acknowledgment proves the payer received the correction even if the claim later denies. Record the clearinghouse acceptance and the payer acceptance as separate events. A report that counts only payments will miss claims that were never accepted."
      ],
      [
        "Sampling and collection",
        "Use every corrected claim in the window when the volume is manageable. If sampling is necessary, draw from the full resubmission log before any claim is closed. A sample of paid claims will overstate the rate because denied and rejected claims are excluded. Record the sampling frame, the method, and every exclusion. Reconcile the resubmission log with the clearinghouse report and the payment ledger. Claims that appear in one record but not the other should be counted and investigated. Have a second reviewer classify a small overlap sample and compare the results. A disagreement rate shows whether the correction reasons and payment definitions are clear.\n\nIf the practice uses a clearinghouse that reassigns claim numbers, document how the replacement was linked to the original. A weak link can make a paid claim look unpaid or the reverse. Test the linkage on a small sample before running the full report. The linkage rule belongs in the methods note."
      ],
      [
        "Analysis and reporting",
        "Report the corrected claims submitted, the first-resubmission payments, the rejections, and the denials. Show the payment share with its denominator and the dollars paid. Add the median days to payment and the most common denial reason after correction. Break the results down by correction type and payer when the groups are large enough. Give the billing lead a decision the data can support, such as adding a second review for modifier corrections or fixing a registration field that drives repeated replacements. Do not present the rate as proof that the corrected claim was clinically or legally sufficient. The measure describes workflow outcomes, and the report should keep that boundary visible.\n\nReport the top correction reasons and their payment rates. A code correction and a demographic correction may have very different outcomes. The breakdown tells the team where to focus training. It also shows whether a payer is rejecting a specific correction type more often."
      ],
      [
        "Limitations and use",
        "The result depends on accurate linkage between the original and replacement claims. A replacement submitted without the original reference may be missing from the population. Report the number of unlinked claims and explain how they were handled. If linkage is weak, the payment rate may describe only the easy-to-track cases. Payer correction rules and deadlines vary, and the practice should confirm them with each payer and qualified billing counsel. This protocol is administrative workflow research, not a coding or compliance determination. Keep the claim records and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report the instability honestly.\n\nA paid claim does not prove the payment was correct. The replacement may pay at a rate that still needs a contract check. Pair the payment rate with an underpayment review when the dollar amount matters. Keep the two questions separate in the report."
      ],
      [
        "Reviewer worksheet",
        "Keep a correction worksheet with the original claim, the replacement claim, the reason, the approver, the submission date, the payer response, and the final paid amount. Add a column for the documentation that supported the change. The worksheet lets a reviewer follow one claim from denial to final payment. Review the worksheet monthly for claims that needed more than one replacement. Read the first and second correction notes together to see whether the first fix missed the real cause. Share the pattern with the coding and billing leads. A short monthly review is enough to catch a repeat problem early.\n\nKeep a small set of correction examples that worked, with the original and replacement claims and the payer response. Use them in onboarding so new billers see what a complete correction looks like. Remove examples that contain patient identifiers or outdated payer rules. The examples are a training aid, not a policy document."
      ]
    ],
    "sources": [
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
        "label": "Claims appeals",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/claims-appeals"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "how-often-does-a-referral-authorization-lapse-before-the-visit-date",
    "title": "How often does a referral authorization lapse before the visit date?",
    "cluster": "measurement",
    "topic": "referral authorizations",
    "publishedAt": "2026-11-10",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for referral authorizations, using one scheduled visit as the unit, an expiration rule, and explicit limits for scheduling teams.",
    "thumbnail": "/images/november-10/how-often-does-a-referral-authorization-lapse-before-the-visit-date.webp",
    "heroImage": "/images/november-10/how-often-does-a-referral-authorization-lapse-before-the-visit-date.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one scheduled visit that requires a referral authorization.",
      "A lapse means the approval expired or was invalid on the visit date.",
      "The result describes one practice’s scheduling controls, not payer behavior."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a referral authorization is expired or invalid on the date of the scheduled visit. The result describes one practice’s authorization log and scheduling process during a defined window. It does not measure whether the payer would have approved a renewal or whether the service was medically necessary. Those questions belong to a separate review. Define the visit types that require authorization and the payers included. Decide whether same-day add-on services are counted with the main visit or separately. State the source of the visit date, such as the scheduling system rather than the claim. Write the scope before the first visit is scored.\n\nState whether the review includes visits that were booked before the authorization was requested. That timing is often the root cause of a lapse. Report the booking date and the request date for each visit. The gap between them is a useful measure of scheduling discipline."
      ],
      [
        "Population and unit of analysis",
        "The unit is one scheduled visit that requires a referral authorization on the visit date. Record the patient key, the visit date, the provider, the payer, the authorization number, and the approved units. If a visit includes several authorized services, count the visit once but note each service’s status. This keeps the measure tied to the scheduling decision. The population is every scheduled visit in the window that required authorization, including visits that were canceled or rescheduled. Excluding cancellations would remove the cases where the lapse was discovered, which is exactly the evidence the review needs. Report the count and the scheduled service value. Keep the visit and authorization records linked.\n\nRecord the authorization source, such as a payer portal, a fax, or a referring office. The source affects how quickly the practice learns about a change. If a payer updates approvals only in the portal, a fax-based log will miss the update. Report the source with each unit."
      ],
      [
        "Definitions and measures",
        "A valid authorization means the payer approved the service, the provider, the date range, and the units for the visit date. A lapse means the authorization was expired, missing, denied, or limited to a different service or provider. A pending authorization means the payer had not decided by the visit date, which is a separate category from a lapse. The primary measure is the number of visits with a lapse divided by all visits requiring authorization. Report pending cases separately so a slow payer does not look like a scheduling failure. Add the number of visits rescheduled because of a lapse and the dollars at risk. Report the median days between the authorization request and the visit date.\n\nAdd a measure for the number of visits where the authorization covered a different provider or location. A valid approval for the wrong provider is a lapse even if the dates are correct. Report provider and location matches separately from date and unit matches. The breakdown shows which field is most often wrong."
      ],
      [
        "Evidence standard",
        "Each unit needs the authorization record, the approval dates, the approved units, and the scheduled visit date. Attach the payer portal screenshot or the electronic authorization file rather than a staff note. Record who checked the authorization and when. A visit with no check record should be marked unverified rather than assumed valid. Keep the scheduling history so the reviewer can see when the visit was booked relative to the approval. If the authorization was renewed, record the renewal date and the new expiration. Do not accept a verbal approval without the reference number and the representative’s name. The audit should show the authorization status the scheduler actually saw.\n\nKeep the payer’s approval document, not only the number written in the log. The document should show the approved service, provider, date range, and units. If the approval arrived by phone, record the reference and the representative’s name. A number without the underlying approval is hard to defend."
      ],
      [
        "Sampling and collection",
        "Use every visit in the window that required authorization when the volume is manageable. If sampling is necessary, draw from the full schedule before any visit is completed or canceled. A sample of completed visits will miss the lapses that caused cancellations. Record the sampling frame, the method, and every exclusion. Reconcile the schedule with the authorization log and the payer portal before analysis. Visits that appear in one source but not the other should be counted and investigated. Have a second reviewer check a small overlap sample. A disagreement rate shows whether the team agrees on what counts as a valid authorization.\n\nIf a visit was rescheduled, record both the original and the new date. A lapse on the original date may have been fixed before the new date, which changes the interpretation. Count the visit once and note both dates. The analysis should show whether the reschedule solved the problem or merely moved it."
      ],
      [
        "Analysis and reporting",
        "Report the visits requiring authorization, the valid visits, the lapsed visits, and the pending visits. Show the lapse share with its denominator and the count rescheduled. Add the dollars at risk and the median lead time between request and visit. Break the results down by payer, provider, and scheduling week when the groups are large enough. Give the scheduling lead a decision the data can support, such as moving the authorization check earlier or adding a daily expiration report. Do not present the lapse rate as proof that the practice will not be paid, because a payer may still honor a late approval. The measure describes scheduling control, and the report should say so.\n\nReport the lapse rate by scheduling lead time, such as visits booked more than thirty days out versus less than seven days out. Longer lead times give more chances for an approval to expire. The comparison can point to a specific scheduling rule. It is more useful than a single practice-wide rate."
      ],
      [
        "Limitations and use",
        "The result depends on the authorization log being complete and on visit dates being recorded accurately. A visit that was rescheduled may appear twice if the analysis does not deduplicate by visit. Report the deduplication rule and the number of records removed. If the log is missing entries, the lapse rate may be understated. Payer authorization rules vary and can change during the year, and the practice should confirm them with each payer. This protocol is administrative workflow research, not a coverage or coding determination. Keep the schedule, the authorization records, and the analysis file together so another reviewer can repeat the count. If the data cannot support a stable conclusion, report that honestly.\n\nA lapse does not always mean the claim will deny, because some payers allow a retroactive approval. The protocol measures scheduling control, not final payment. If the practice wants a payment measure, link the visit to the claim and review the denial. Report both only when the linkage is reliable."
      ],
      [
        "Reviewer worksheet",
        "Create a visit-level worksheet with the scheduled date, the payer, the service, the authorization number, the approved units, the expiration date, and the status on the visit date. Add the scheduler and the person who confirmed the approval. The worksheet should be completed from the system records, not from memory. Review the worksheet each week and mark any visit that needed a reschedule or a new approval. Ask the scheduler what happened before assigning a cause. The answer often reveals a timing problem that a policy change can fix. Keep the weekly worksheet with the authorization log for the next audit.\n\nAdd a column for the person who confirmed the approval and the time of the confirmation. A confirmation made on the morning of the visit is weaker than one made a week earlier. Report the confirmation lead time beside the lapse rate. The timing shows whether the practice is checking early or only at the last minute."
      ]
    ],
    "sources": [
      {
        "label": "Medicare Claims Processing Manual",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms"
      },
      {
        "label": "Medicare provider enrollment",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers"
      },
      {
        "label": "Claims appeals",
        "publisher": "Medicare.gov",
        "url": "https://www.medicare.gov/claims-appeals"
      },
      {
        "label": "HIPAA Privacy Rule",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      }
    ]
  },
  {
    "slug": "what-share-of-outsourced-billing-work-has-a-documented-quality-review",
    "title": "What share of outsourced billing work has a documented quality review?",
    "cluster": "measurement",
    "topic": "billing vendor oversight",
    "publishedAt": "2026-11-10",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for outsourced billing quality, using one reviewed work item as the unit, a documented-review rule, and explicit limits for practice owners.",
    "thumbnail": "/images/november-10/what-share-of-outsourced-billing-work-has-a-documented-quality-review.webp",
    "heroImage": "/images/november-10/what-share-of-outsourced-billing-work-has-a-documented-quality-review.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one outsourced work item, such as a claim or an appeal.",
      "A documented review means a named reviewer recorded a result and a date.",
      "The result describes one practice’s vendor oversight, not the vendor’s overall quality."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks what share of outsourced billing work has evidence that someone reviewed it against the practice’s standard. The result describes one practice’s oversight process during a defined window. It does not measure the vendor’s accuracy, employee qualifications, or contract compliance. Those questions need a separate sample with independent rework. Define the work types included, such as claims, denials, appeals, and patient calls. Decide whether the review must be performed by the practice or whether a vendor’s internal review counts. State the review standard and the evidence required. Write the rules before the first work item is scored.\n\nState whether the review covers work performed offshore, onshore, or by a subcontractor. The location and the entity can change the oversight obligations. If the vendor uses a subcontractor, count the work under the entity that actually performed it. A clear scope prevents the practice from assuming coverage it does not have."
      ],
      [
        "Population and unit of analysis",
        "The unit is one outsourced work item that the contract requires to be reviewed. Record the work item key, the work date, the vendor team, the reviewer, and the review date. If one claim generated several review activities, count the claim once and note the activities. This keeps the measure tied to the deliverable the practice is paying for. The population is every work item in the window that falls under the review requirement, including items the vendor marked as not reviewed. Excluding them would overstate coverage. Report the count and the dollar value of the work. Keep the vendor report and the practice record linked in the analysis file.\n\nRecord the work item’s value and the date it left the practice. A review that happens weeks later may still be valid, but it cannot prevent the error from reaching the payer. Report the review timing as well as the review existence. The practice needs to know whether the control is preventive or detective."
      ],
      [
        "Definitions and measures",
        "A documented review means a named reviewer recorded a result, a date, and the standard applied. A review note without a date or a reviewer is not countable. A vendor quality score alone is not a work-item review unless it can be traced to the individual claim. Separate an internal vendor review from a practice review when the contract treats them differently. The primary measure is the number of work items with a documented review divided by all work items in the review population. Report the review type and the reviewer group beside the rate. Add the number of reviews that found an error and the number that led to a correction. A high review count with no findings may mean the review is superficial.\n\nAdd a measure for the share of reviews that found an error and the share that led to a correction. A review that never finds anything may be too shallow or may cover work that is already clean. Compare the finding rate with the practice’s own denial data. A large gap deserves a closer look."
      ],
      [
        "Evidence standard",
        "Each unit needs the work item, the review checklist, the reviewer, the review date, and the result. Attach the corrected claim or the appeal note when the review changed the work. If the vendor performed the review, keep the vendor’s audit file and the practice’s acceptance record. A review without a result is not evidence that the standard was applied. Keep the vendor’s work report separate from the practice’s review record so the two can be compared. If a review happened after the work left the practice, note the date and whether the item was corrected. Do not reconstruct a review from memory during the audit. The evidence should show what existed at the time of the work.\n\nKeep the vendor’s work log and the practice’s review record side by side. If the vendor reviews its own work, require the reviewer name and the date in the file. A vendor quality dashboard is not a substitute for an item-level record. The practice should be able to test the dashboard against a sample."
      ],
      [
        "Sampling and collection",
        "Use every work item in the review population when the volume is manageable. If sampling is necessary, draw from the full vendor report before any item is corrected or closed. A sample of reviewed items will overstate coverage because unreviewed items are excluded. Record the sampling frame, the method, and every exclusion. Reconcile the vendor report with the practice management system and the invoice volume. Work items that appear in one record but not the other should be counted and investigated. Have a second reviewer check a small overlap sample. A disagreement rate shows whether the review standard is specific enough to apply consistently.\n\nIf the vendor provides an extract, check the row count against the invoice and the practice management system before sampling. A vendor extract that is missing rows can make coverage look better or worse. Report the reconciliation result. The extract itself is part of the evidence."
      ],
      [
        "Analysis and reporting",
        "Report the work items in scope, the items with a documented review, the items without one, and the items marked unverifiable. Show the coverage share with its denominator and the dollars represented. Add the review findings and the corrections that followed. Break the results down by work type, vendor team, and month when the groups are large enough. Give the practice owner a decision the data can support, such as adding a monthly sample, requiring a reviewer name, or renegotiating the quality clause. Do not present the coverage rate as proof that the work was accurate. The measure answers a narrower question about oversight, and the report should keep that boundary clear.\n\nReport coverage by work type and by month. Claims, appeals, and patient calls may have very different review rates. A single overall percentage can hide an unreviewed category. Show the category counts so the practice can target the gap."
      ],
      [
        "Limitations and use",
        "The result depends on the vendor report being complete and on the review record being available. A review performed verbally may have happened but cannot be counted. Report those cases separately rather than assuming coverage. If the vendor controls the only record, the practice should require a copy as a contract term. Outsourcing arrangements involve privacy, security, and business associate obligations that this protocol does not evaluate. The practice should review those terms with qualified counsel. This is administrative oversight research, not a legal or compliance opinion. Keep the vendor reports, review records, and analysis file together so another reviewer can repeat the count.\n\nA documented review does not prove the work was correct. It proves that someone looked and recorded a result. Pair the coverage measure with an independent rework sample. Also review the vendor’s privacy and security terms with qualified counsel. The protocol is about oversight, not legal compliance."
      ],
      [
        "Reviewer worksheet",
        "Build a review worksheet with the work item, the review type, the reviewer, the date, the checklist result, and the correction made. Add the vendor’s original status and the practice’s final status. The comparison shows whether the review changed anything or only confirmed the vendor’s report. Review the worksheet monthly with the vendor contact and the practice owner. Focus on categories with low coverage or a low finding rate. Ask the vendor to explain the gap and to propose a fix. Keep the meeting notes with the worksheet so the next review can follow up.\n\nAsk the vendor for a monthly list of the work items it reviewed and the ones it did not. Compare the list with the invoice volume before the practice performs its own sample. A vendor that cannot produce the list is not ready for a larger scope. The request also signals that the practice intends to verify the claim."
      ]
    ],
    "sources": [
      {
        "label": "Manage a business",
        "publisher": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
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
    "slug": "how-often-do-non-covered-service-notices-lack-a-patient-signature",
    "title": "How often do non-covered service notices lack a patient signature?",
    "cluster": "measurement",
    "topic": "patient notices",
    "publishedAt": "2026-11-10",
    "sourceCount": 4,
    "excerpt": "A local measurement protocol for non-covered service notices, using one billed service as the unit, a signature-on-file rule, and explicit limits for billing teams.",
    "thumbnail": "/images/november-10/how-often-do-non-covered-service-notices-lack-a-patient-signature.webp",
    "heroImage": "/images/november-10/how-often-do-non-covered-service-notices-lack-a-patient-signature.webp",
    "readingMinutes": 13,
    "keyStats": [
      "The unit is one billed service that required a non-covered service notice.",
      "A complete notice has a patient signature dated before the service.",
      "The result describes one practice’s notice records, not the patient’s understanding."
    ],
    "sections": [
      [
        "Question and scope",
        "This protocol asks how often a service that required a non-covered service notice was billed without a signed notice on file. The result describes one practice’s documentation during a defined window. It does not measure whether the patient actually understood the notice or whether the charge was appropriate. Those are separate questions. Define the services included and the policy that requires a notice. Decide whether a notice signed at an earlier visit counts for a recurring service. State the date source for the service and the signature. Write the scope before the first claim is reviewed.\n\nState whether the review includes services that were not billed because the patient declined. Those notices still matter for the patient conversation and for the practice’s records. If they are excluded, the completion rate may describe only the charges that survived. Report the declined group separately."
      ],
      [
        "Population and unit of analysis",
        "The unit is one billed service line that required a notice under the practice policy. Record the claim number, the service date, the service code, the patient key, and the notice document. If one notice covers several services on the same date, count each service line but note the shared form. This keeps the measure tied to the charges the practice billed. The population is every service line in the window that the policy says needs a notice, including lines that were later written off. Excluding write-offs would remove the cases where the missing signature may have mattered most. Report the count and the billed amount. Keep the claim and notice records linked in the analysis file.\n\nRecord the notice version used for each service. A form that changed during the window may explain a difference in completion. If the practice uses electronic notices, record the system and the signature method. The unit should be specific enough that a reviewer can find the exact form."
      ],
      [
        "Definitions and measures",
        "A complete notice means a signed form that names the patient, the service, the reason for possible non-coverage, and the date. The signature must be dated before the service or, when the policy allows, on the same day before the service begins. A form signed after the service is late and should be reported separately. A form for a different service is not a match. The primary measure is the number of service lines with a complete notice divided by all service lines that required one. Report late, missing, and mismatched notices separately. Add the billed dollars represented by each group. A high completion rate with many late signatures is a different result from a low rate with timely forms.\n\nAdd a measure for notices that named the wrong service, even when a signature exists. A signed form for a different service does not support the charge. Report mismatches separately from missing signatures. The two failures need different fixes, one in the conversation and one in the form selection."
      ],
      [
        "Evidence standard",
        "Each unit needs the signed notice, the service date, the claim line, and the staff member who collected the signature. Attach the scanned form to the encounter or record the document identifier. If the notice was electronic, keep the audit trail that shows when the patient signed. A note that says the patient was informed is not a substitute for the form the policy requires. Keep the notice separate from the billing note so the reviewer can see what was signed and when. If the patient declined the service, record the decline and the date. Do not treat a general financial responsibility form as a non-covered service notice unless it names the specific service. The audit should distinguish a missing form from a form that does not cover the service.\n\nKeep the notice image or the electronic signature record with the encounter. If the form was scanned, confirm that the scan is legible and that the date is visible. A signature without a date is incomplete for this measure. Record the staff member who collected it so the practice can follow up on training."
      ],
      [
        "Sampling and collection",
        "Use every service line in the window when the volume is manageable. If sampling is necessary, draw from the full claim population before any line is written off or adjusted. A sample of paid claims will overstate completion because denied lines may be excluded. Record the sampling frame, the method, and every exclusion. Reconcile the claim list with the notice index and the encounter record before analysis. Services that appear in one source but not the other should be counted and investigated. Have a second reviewer check a small overlap sample. A disagreement rate shows whether the service list and the signature rule are clear enough to apply consistently.\n\nIf the practice uses multiple locations, sample within each location. A single site may have a different form or a different check-in process. Report the location counts separately. Pooling them can hide a site-specific problem that is easy to fix."
      ],
      [
        "Analysis and reporting",
        "Report the service lines requiring a notice, the complete notices, the late notices, the missing notices, and the mismatches. Show the completion share with its denominator and the billed dollars. Add the most common service type and the most common staff shift when the data supports it. Break the results down by provider and month when the groups are large enough. Give the billing lead a decision the data can support, such as shortening the form, moving the conversation earlier, or adding a claim-edit check. Do not present the completion rate as proof that the patient understood the charge. The measure describes documentation, and the report should say so.\n\nReport completion by service type and by notice version. A preventive service and a cosmetic service may follow different workflows. The breakdown shows where the form is working and where the conversation breaks down. Share the result with the front-desk lead and the billing lead together."
      ],
      [
        "Limitations and use",
        "The result depends on the service list being current and on the notice index being complete. A form stored in a paper chart may exist but not be counted. Report those cases separately rather than assuming a missing signature. If the practice changes its notice policy during the window, report the change date and analyze the periods separately. Notice requirements vary by payer, service, and state, and the practice should confirm them with qualified billing and legal counsel. This protocol is administrative workflow research, not a legal or compliance determination. Keep the claims, notices, and analysis file together so another reviewer can repeat the count. If the records cannot support a stable conclusion, report that instability honestly.\n\nA signed notice does not prove the patient understood the charge, and a missing notice does not prove the charge was wrong. The protocol measures documentation, not comprehension or legal validity. The practice should review its notice language and requirements with qualified counsel. Report the limits beside the number."
      ],
      [
        "Reviewer worksheet",
        "Use a notice worksheet with the claim line, the service date, the notice type, the signature date, the staff member, and the document location. Add a column for whether the patient declined the service. The worksheet should be completed from the claim and the notice record together. Review the worksheet monthly and group the misses by service and by location. Read a few patient disputes beside the misses to see whether the notice language was clear. Share the findings with the front-desk lead and the billing lead. A short review is enough to spot a recurring gap.\n\nKeep a short list of the most common patient questions and the approved answers. Give it to the front desk with the notice form so the conversation starts from the same facts. Update the list when a payer changes its coverage rule. Consistent answers reduce both disputes and callbacks."
      ]
    ],
    "sources": [
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
        "label": "Medicare Physician Fee Schedule",
        "publisher": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/medicare/payment/fee-schedules/physician"
      },
      {
        "label": "Debt collection and credit practices",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/credit-finance/debt-collection"
      }
    ]
  }
];
