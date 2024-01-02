CLIENT

Pages:

- home

- dashboard (user is led here when logged in - leading to all other pages)

- service-users
    - /service-users/list (list of all service users)
    - /service-users/list/:id (view service user)
    - /service-users/list/:id/edit (edit service user)
    - /service-users/list/:id/delete (delete service user)
    - /service-users/add (add service user)
    - /service-users/:id/care-plans (list of all care plans for service user)
    - /service-users/:id/care-plans/:id (view care plan)
    - /service-users/:id/care-plans/:id/delete (delete care plan)
    - /service-users/:id/care-plans/add (add care plan)
    - /service-users/:id/medication-list (list of all medication for service user)
    - /service-users/:id/medication-list/:id (view medication)
    - /service-users/:id/medication-list/add (add medication)
    - /service-users/:id/medication-list/:id/edit (edit medication)
    - /service-users/:id/medication-list/:id/delete (delete medication)
    - /service-users/:id/risk-assessments (list of all risk assessments for service user)
    - /service-users/:id/risk-assessments/:id (view risk assessment)
    - /service-users/:id/risk-assessments/add (add risk assessment)
    - /service-users/:id/risk-assessments/:id/delete (delete risk assessment)
    - /service-users/:id/notes (list of all notes for service user)
    - /service-users/:id/notes/:id (view note)
    - /service-users/:id/notes/add (add note)
    - /service-users/:id/notes/:id/edit (edit note)
    - /service-users/:id/notes/:id/delete (delete note)

- employees
    - /employees/list (list of all employees)
    - /employees/list/:id (view employee)
    - /employees/list/:id/edit (edit employee)
    - /employees/list/:id/delete (delete employee)
    - /employees/add (add employee)
    - /employees/profiles (list of all employee profiles)
    - /employees/:id/profile (view employee profile)
    - /employees/:id/profile/add (add employee profile)
    - /employees/:id/profile/delete (delete employee profile)
    - /employees/requests (list of all outstanding requests)
    - /employees/:id/requests (list of all requests for employee)
    - /employees/:id/requests/:id (view request)
    - /employees/:id/requests/add (add request)
    - /employees/:id/requests/:id/edit (edit request)
    - /employees/:id/requests/:id/completed (mark request as completed)
    - /employees/:id/requests/:id/delete (delete request)
    - /employees/other-documents (list of all other documents)
    - /employees/:id/other-documents (list of all other documents for employee)
    - /employees/:id/other-documents/:id (view other document)
    - /employees/:id/other-documents/add (add other document)
    - /employees/:id/other-documents/:id/delete (delete other document)
    - /employees/training (list of all outstanding training)
    - /employees/:id/training (list of all training for employee)
    - /employees/:id/training/add (add training)
    - /employees/:id/training/:id/edit (edit training)
    - /employees/:id/training/:id/delete (delete training)
    - /employees/:id/training/:id/completed (mark training as completed)

- policies
    - /policies/list (list of all policies)
    - /policies/list/:id (view policy)
    - /policies/list/:id/delete (delete policy)
    - /policies/add (add policy)

- calendar
    - /calendar (view calendar)
    - /calendar/add (add event)
    - /calendar/:id/edit (edit event)
    - /calendar/:id/delete (delete event)