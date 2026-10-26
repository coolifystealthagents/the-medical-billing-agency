const publishedAt = '2026-10-25';

export const october25BlogScan = [
  {
    "slug": "themedicalbillingagency-build-a-claim-intake-intake-record-that-survives-review",
    "title": "Build a claim intake intake record that survives review",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-map-the-source-of-truth-for-eligibility-check",
    "title": "Map the source of truth for eligibility check",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-onboard-a-va-into-eligibility-check-in-the-first-week",
    "title": "Onboard a VA into eligibility check in the first week",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-report-payment-posting-without-vanity-metrics",
    "title": "Report payment posting without vanity metrics",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-review-access-before-changing-payer-credential",
    "title": "Review access before changing payer credential",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-run-a-weekly-review-for-claim-intake",
    "title": "Run a weekly review for claim intake",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-run-an-exception-queue-for-payment-posting",
    "title": "Run an exception queue for payment posting",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-sample-quality-for-patient-statement-without-guessing",
    "title": "Sample quality for patient statement without guessing",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-set-approval-boundaries-around-coding-audit",
    "title": "Set approval boundaries around coding audit",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-standardize-month-end-close-updates-across-the-team",
    "title": "Standardize month-end close updates across the team",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-write-a-handoff-protocol-for-denial-queue",
    "title": "Write a handoff protocol for denial queue",
    "published": "2026-10-25"
  },
  {
    "slug": "themedicalbillingagency-write-an-sop-for-denial-queue-that-people-use",
    "title": "Write an SOP for denial queue that people use",
    "published": "2026-10-25"
  }
];

export const october25Blog = [
  [
    "themedicalbillingagency-build-a-claim-intake-intake-record-that-survives-review",
    "Build a claim intake intake record that survives review",
    "intake and records",
    "A source-bounded medical billing guide for billing company owners: claim intake without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: claim intake without unsupported decisions.",
      "sections": [
        {
          "heading": "Why claim intake needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The claim intake control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the claim intake record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Record the exact claim intake source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since. If the claim intake rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs claim intake. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Write the next action as a sentence with an owner and a time. \"Review the claim intake exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Keep the claim intake queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for claim intake: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for claim intake: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Use a short reason code for every claim intake exception. The code should describe the evidence problem, not the person who found it."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close claim intake only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Review one claim intake case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        }
      ],
      "checklist": [
        "Name the trigger and source for claim intake.",
        "Keep the claim intake evidence with the work item.",
        "Separate claim intake preparation from reserved judgment.",
        "Assign exception owners and due dates for claim intake.",
        "Record close evidence and review claim intake exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-build-a-claim-intake-intake-record-that-survives-review.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-map-the-source-of-truth-for-eligibility-check",
    "Map the source of truth for eligibility check",
    "intake and records",
    "A source-bounded medical billing guide for billing company owners: eligibility check without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: eligibility check without unsupported decisions.",
      "sections": [
        {
          "heading": "Why eligibility check needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The eligibility check control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the eligibility check record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Write the next action as a sentence with an owner and a time. \"Review the eligibility check exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is. Keep a named backup for the eligibility check owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs eligibility check. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Keep the eligibility check queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work. Do not copy a value from a prior eligibility check record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for eligibility check: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Use a short reason code for every eligibility check exception. The code should describe the evidence problem, not the person who found it."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for eligibility check: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Review one eligibility check case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close eligibility check only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. If the eligibility check rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        }
      ],
      "checklist": [
        "Name the trigger and source for eligibility check.",
        "Keep the eligibility check evidence with the work item.",
        "Separate eligibility check preparation from reserved judgment.",
        "Assign exception owners and due dates for eligibility check.",
        "Record close evidence and review eligibility check exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-map-the-source-of-truth-for-eligibility-check.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-onboard-a-va-into-eligibility-check-in-the-first-week",
    "Onboard a VA into eligibility check in the first week",
    "handoff and ownership",
    "A source-bounded medical billing guide for billing company owners: eligibility check without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: eligibility check without unsupported decisions.",
      "sections": [
        {
          "heading": "Why eligibility check needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The eligibility check control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the eligibility check record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Close the loop with the person who raised the eligibility check issue. A record that is internally complete but never confirmed by the requester is only half closed. Review one eligibility check case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs eligibility check. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Record the exact eligibility check source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Write the next action as a sentence with an owner and a time. \"Review the eligibility check exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for eligibility check: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Keep the eligibility check queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for eligibility check: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close eligibility check only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Use a short reason code for every eligibility check exception. The code should describe the evidence problem, not the person who found it."
        }
      ],
      "checklist": [
        "Name the trigger and source for eligibility check.",
        "Keep the eligibility check evidence with the work item.",
        "Separate eligibility check preparation from reserved judgment.",
        "Assign exception owners and due dates for eligibility check.",
        "Record close evidence and review eligibility check exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-onboard-a-va-into-eligibility-check-in-the-first-week.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-report-payment-posting-without-vanity-metrics",
    "Report payment posting without vanity metrics",
    "reporting and review",
    "A source-bounded medical billing guide for billing company owners: payment posting without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: payment posting without unsupported decisions.",
      "sections": [
        {
          "heading": "Why payment posting needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The payment posting control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the payment posting record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Write the next action as a sentence with an owner and a time. \"Review the payment posting exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is. Keep a named backup for the payment posting owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs payment posting. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Keep the payment posting queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work. Do not copy a value from a prior payment posting record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for payment posting: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Use a short reason code for every payment posting exception. The code should describe the evidence problem, not the person who found it."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for payment posting: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Review one payment posting case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close payment posting only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. If the payment posting rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        }
      ],
      "checklist": [
        "Name the trigger and source for payment posting.",
        "Keep the payment posting evidence with the work item.",
        "Separate payment posting preparation from reserved judgment.",
        "Assign exception owners and due dates for payment posting.",
        "Record close evidence and review payment posting exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-report-payment-posting-without-vanity-metrics.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-review-access-before-changing-payer-credential",
    "Review access before changing payer credential",
    "access and controls",
    "A source-bounded medical billing guide for billing company owners: payer credential without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: payer credential without unsupported decisions.",
      "sections": [
        {
          "heading": "Why payer credential needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The payer credential control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the payer credential record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. If the payer credential rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable. Keep the payer credential queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs payer credential. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Keep a named backup for the payer credential owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Do not copy a value from a prior payer credential record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for payer credential: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Close the loop with the person who raised the payer credential issue. A record that is internally complete but never confirmed by the requester is only half closed."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for payer credential: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Record the exact payer credential source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close payer credential only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Write the next action as a sentence with an owner and a time. \"Review the payer credential exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
        }
      ],
      "checklist": [
        "Name the trigger and source for payer credential.",
        "Keep the payer credential evidence with the work item.",
        "Separate payer credential preparation from reserved judgment.",
        "Assign exception owners and due dates for payer credential.",
        "Record close evidence and review payer credential exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-review-access-before-changing-payer-credential.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-run-a-weekly-review-for-claim-intake",
    "Run a weekly review for claim intake",
    "reporting and review",
    "A source-bounded medical billing guide for billing company owners: claim intake without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: claim intake without unsupported decisions.",
      "sections": [
        {
          "heading": "Why claim intake needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The claim intake control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the claim intake record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Do not copy a value from a prior claim intake record because it looks familiar. Reopen the source, confirm the version, and record what changed. Use a short reason code for every claim intake exception. The code should describe the evidence problem, not the person who found it."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs claim intake. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Close the loop with the person who raised the claim intake issue. A record that is internally complete but never confirmed by the requester is only half closed. Review one claim intake case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Record the exact claim intake source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for claim intake: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Write the next action as a sentence with an owner and a time. \"Review the claim intake exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for claim intake: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Keep the claim intake queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close claim intake only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed."
        }
      ],
      "checklist": [
        "Name the trigger and source for claim intake.",
        "Keep the claim intake evidence with the work item.",
        "Separate claim intake preparation from reserved judgment.",
        "Assign exception owners and due dates for claim intake.",
        "Record close evidence and review claim intake exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-run-a-weekly-review-for-claim-intake.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-run-an-exception-queue-for-payment-posting",
    "Run an exception queue for payment posting",
    "exceptions and quality",
    "A source-bounded medical billing guide for billing company owners: payment posting without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: payment posting without unsupported decisions.",
      "sections": [
        {
          "heading": "Why payment posting needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The payment posting control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the payment posting record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed. Close the loop with the person who raised the payment posting issue. A record that is internally complete but never confirmed by the requester is only half closed."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs payment posting. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Use a short reason code for every payment posting exception. The code should describe the evidence problem, not the person who found it. Record the exact payment posting source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Review one payment posting case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for payment posting: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. If the payment posting rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for payment posting: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Keep a named backup for the payment posting owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close payment posting only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Do not copy a value from a prior payment posting record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        }
      ],
      "checklist": [
        "Name the trigger and source for payment posting.",
        "Keep the payment posting evidence with the work item.",
        "Separate payment posting preparation from reserved judgment.",
        "Assign exception owners and due dates for payment posting.",
        "Record close evidence and review payment posting exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-run-an-exception-queue-for-payment-posting.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-sample-quality-for-patient-statement-without-guessing",
    "Sample quality for patient statement without guessing",
    "exceptions and quality",
    "A source-bounded medical billing guide for billing company owners: patient statement without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: patient statement without unsupported decisions.",
      "sections": [
        {
          "heading": "Why patient statement needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The patient statement control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the patient statement record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Review one patient statement case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count. Write the next action as a sentence with an owner and a time. \"Review the patient statement exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs patient statement. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. If the patient statement rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Keep a named backup for the patient statement owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for patient statement: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Do not copy a value from a prior patient statement record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for patient statement: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Close the loop with the person who raised the patient statement issue. A record that is internally complete but never confirmed by the requester is only half closed."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close patient statement only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Record the exact patient statement source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        }
      ],
      "checklist": [
        "Name the trigger and source for patient statement.",
        "Keep the patient statement evidence with the work item.",
        "Separate patient statement preparation from reserved judgment.",
        "Assign exception owners and due dates for patient statement.",
        "Record close evidence and review patient statement exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-sample-quality-for-patient-statement-without-guessing.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-set-approval-boundaries-around-coding-audit",
    "Set approval boundaries around coding audit",
    "handoff and ownership",
    "A source-bounded medical billing guide for billing company owners: coding audit without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: coding audit without unsupported decisions.",
      "sections": [
        {
          "heading": "Why coding audit needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The coding audit control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the coding audit record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Use a short reason code for every coding audit exception. The code should describe the evidence problem, not the person who found it. Record the exact coding audit source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs coding audit. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Review one coding audit case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count. Write the next action as a sentence with an owner and a time. \"Review the coding audit exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. If the coding audit rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for coding audit: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Keep a named backup for the coding audit owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for coding audit: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Do not copy a value from a prior coding audit record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close coding audit only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Close the loop with the person who raised the coding audit issue. A record that is internally complete but never confirmed by the requester is only half closed."
        }
      ],
      "checklist": [
        "Name the trigger and source for coding audit.",
        "Keep the coding audit evidence with the work item.",
        "Separate coding audit preparation from reserved judgment.",
        "Assign exception owners and due dates for coding audit.",
        "Record close evidence and review coding audit exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-set-approval-boundaries-around-coding-audit.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-standardize-month-end-close-updates-across-the-team",
    "Standardize month-end close updates across the team",
    "intake and records",
    "A source-bounded medical billing guide for billing company owners: month-end close without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: month-end close without unsupported decisions.",
      "sections": [
        {
          "heading": "Why month-end close needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The month-end close control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the month-end close record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Keep a named backup for the month-end close owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs month-end close. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Do not copy a value from a prior month-end close record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Close the loop with the person who raised the month-end close issue. A record that is internally complete but never confirmed by the requester is only half closed."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for month-end close: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Record the exact month-end close source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for month-end close: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Write the next action as a sentence with an owner and a time. \"Review the month-end close exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close month-end close only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Keep the month-end close queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work."
        }
      ],
      "checklist": [
        "Name the trigger and source for month-end close.",
        "Keep the month-end close evidence with the work item.",
        "Separate month-end close preparation from reserved judgment.",
        "Assign exception owners and due dates for month-end close.",
        "Record close evidence and review month-end close exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-standardize-month-end-close-updates-across-the-team.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-write-a-handoff-protocol-for-denial-queue",
    "Write a handoff protocol for denial queue",
    "handoff and ownership",
    "A source-bounded medical billing guide for billing company owners: denial queue without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: denial queue without unsupported decisions.",
      "sections": [
        {
          "heading": "Why denial queue needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The denial queue control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the denial queue record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Keep the denial queue queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work. Do not copy a value from a prior denial queue record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs denial queue. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed. Close the loop with the person who raised the denial queue issue. A record that is internally complete but never confirmed by the requester is only half closed."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Use a short reason code for every denial queue exception. The code should describe the evidence problem, not the person who found it."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for denial queue: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. Review one denial queue case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for denial queue: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. If the denial queue rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close denial queue only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Keep a named backup for the denial queue owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        }
      ],
      "checklist": [
        "Name the trigger and source for denial queue.",
        "Keep the denial queue evidence with the work item.",
        "Separate denial queue preparation from reserved judgment.",
        "Assign exception owners and due dates for denial queue.",
        "Record close evidence and review denial queue exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-write-a-handoff-protocol-for-denial-queue.png",
    "2026-10-25"
  ],
  [
    "themedicalbillingagency-write-an-sop-for-denial-queue-that-people-use",
    "Write an SOP for denial queue that people use",
    "intake and records",
    "A source-bounded medical billing guide for billing company owners: denial queue without unsupported decisions.",
    {
      "overview": "A source-bounded medical billing guide for billing company owners: denial queue without unsupported decisions.",
      "sections": [
        {
          "heading": "Why denial queue needs its own control",
          "body": "A medical billing team can complete a task and still leave the next person unable to verify it. The denial queue control exists to make the work reconstructable from a source, a decision, and a close. The cost is not only rework. When the denial queue record is thin, managers spend time asking what changed, customers hear a different version, and the next reviewer has to rebuild the story from memory. Treat the control as a queue item with an owner, a due time, and a close condition. A task that has no close condition becomes an open loop that survives the week. Record the exact denial queue source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since. If the denial queue rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        },
        {
          "heading": "Start with the source record",
          "body": "Begin with the record that governs denial queue. Record who created it, the version or date observed, the field it supports, and the owner who can confirm it. Keep the source and the interpretation in separate fields. A forwarded message or a verbal confirmation can be a lead, but it is not proof that the record changed. When two sources disagree, preserve both values and label the discrepancy. Do not overwrite the earlier value to make the report look clean. Write the next action as a sentence with an owner and a time. \"Review the denial queue exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
        },
        {
          "heading": "Separate preparation from approval",
          "body": "Name the owner before the VA prepares any action. The VA may collect, compare, label, calculate, and route; the accountable owner decides whether the evidence is enough. Write the boundary into the task brief. Name the systems the VA may use, the fields they may change, and the questions they must route. A complete packet is not an approval. A drafted message, a proposed schedule, or a reconciled total still needs the named owner decision when policy or risk is involved. Keep the denial queue queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work."
        },
        {
          "heading": "Build the routine",
          "body": "Build a short daily routine for denial queue: open the queue, check the source, record the exception, and leave a next action with a time. Use the same fields every day. Consistency makes the work comparable and lets a reviewer spot a missing source without reading the whole thread. Keep the queue small enough to finish. A long queue hides the oldest exception and makes the monthly report look better than the operation. When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed."
        },
        {
          "heading": "Handle exceptions before they age",
          "body": "Define reason codes for denial queue: missing evidence, identity mismatch, conflicting record, stale version, unavailable owner, access failure, and scope change. Preserve the original request and the correction. A later reviewer should see what was known when the first action was taken. If the exception affects pay, safety, access, legal, or a customer commitment, stop the dependent action and route it. Urgency is not permission to work around the control. Use a short reason code for every denial queue exception. The code should describe the evidence problem, not the person who found it."
        },
        {
          "heading": "Verify, close, and review",
          "body": "Close denial queue only when the destination record shows the approved change. A sent message or a closed ticket is not proof that the schedule, ledger, access, or assignment changed. Reconcile open cases at the end of the day and explain the carryover. A case that is silently carried forward becomes an aging exception. Review a sample each month. Check the source, the approval, the execution, and the confirmation. A repeated gap should change the procedure, not only the coaching. Review one denial queue case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        }
      ],
      "checklist": [
        "Name the trigger and source for denial queue.",
        "Keep the denial queue evidence with the work item.",
        "Separate denial queue preparation from reserved judgment.",
        "Assign exception owners and due dates for denial queue.",
        "Record close evidence and review denial queue exceptions."
      ]
    },
    "/images/october-25/themedicalbillingagency-write-an-sop-for-denial-queue-that-people-use.png",
    "2026-10-25"
  ]
] as const;
