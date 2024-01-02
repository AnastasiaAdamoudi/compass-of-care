SERVER

Endpoints:

- Service Users:

        /service-users/list (GET): Retrieve a list of all service users.

        /service-users/:id (GET): Retrieve details of a specific service user.

        /service-users/:id (PUT): Update details of a specific service user.

        /service-users/:id (DELETE): Delete a specific service user.

        /service-users (POST): Add a new service user.

        /service-users/:id/care-plans (GET): Retrieve all care plans for a specific service user.

        /service-users/:id/care-plans/:id (GET): Retrieve details of a specific care plan.

        /service-users/:id/care-plans/:id (DELETE): Delete a specific care plan.

        /service-users/:id/care-plans (POST): Add a new care plan.

        /service-users/:id/medication-list (GET): Retrieve all medications for a specific service user.

        /service-users/:id/medication-list/:id (GET): Retrieve details of a specific medication.

        /service-users/:id/medication-list (POST): Add a new medication.

        /service-users/:id/medication-list/:id (PUT): Update details of a specific medication.

        /service-users/:id/medication-list/:id (DELETE): Delete a specific medication.

        /service-users/:id/risk-assessments (GET): Retrieve all risk assessments for a specific service user.

        /service-users/:id/risk-assessments/:id (GET): Retrieve details of a specific risk assessment.

        /service-users/:id/risk-assessments/:id (DELETE): Delete a specific risk assessment.

        /service-users/:id/risk-assessments (POST): Add a new risk assessment.

        /service-users/:id/notes (GET): Retrieve all notes for a specific service user.

        /service-users/:id/notes/:id (GET): Retrieve details of a specific note.

        /service-users/:id/notes (POST): Add a new note.

        /service-users/:id/notes/:id (PUT): Update details of a specific note.

        /service-users/:id/notes/:id (DELETE): Delete a specific note.

    
- Employees:

        /employees/list (GET): Retrieve a list of all employees.

        /employees/:id (GET): Retrieve details of a specific employee.

        /employees/:id (PUT): Update details of a specific employee.

        /employees/:id (DELETE): Delete a specific employee.

        /employees (POST): Add a new employee.

        /employees/profiles (GET): Retrieve a list of all employee profiles.

        /employees/:id/profile (GET): Retrieve details of a specific employee profile.

        /employees/:id/profile (POST): Add a new employee profile.

        /employees/:id/profile (DELETE): Delete a specific employee profile.

        /employees/requests (GET): Retrieve a list of all outstanding requests.

        /employees/:id/requests (GET): Retrieve a list of all requests for a specific employee.
        
        /employees/:id/requests/:id (GET): Retrieve details of a specific request.

        /employees/:id/requests (POST): Add a new request.

        /employees/:id/requests/:id (PUT): Update details of a specific request.

        /employees/:id/requests/:id (DELETE): Delete a specific request.

        /employees/:id/requests/:id/completed (PUT): Mark a specific request as completed.

        /employees/other-documents (GET): Retrieve a list of all other documents.

        /employees/:id/other-documents (GET): Retrieve a list of all other documents for a specific employee.

        /employees/:id/other-documents/:id (GET): Retrieve details of a specific other document.

        /employees/:id/other-documents (POST): Add a new other document.

        /employees/:id/other-documents/:id (DELETE): Delete a specific other document.

        /employees/training (GET): Retrieve a list of all outstanding training.

        /employees/:id/training (GET): Retrieve a list of all training for a specific employee.

        /employees/:id/training/:id (GET): Retrieve details of a specific training.

        /employees/:id/training (POST): Add new training.

        /employees/:id/training/:id (PUT): Update details of a specific training.

        /employees/:id/training/:id (DELETE): Delete a specific training.

        /employees/:id/training/:id/completed (PUT): Mark training as completed.


- Policies:

        /policies/list (GET): Retrieve a list of all policies.
        /policies/:id (GET): Retrieve details of a specific policy.
        /policies/:id (DELETE): Delete a specific policy.
        /policies (POST): Add a new policy.


- Calendar:

        /calendar (GET): Retrieve events for the calendar.
        /calendar (POST): Add a new event.
        /calendar/:id (PUT): Update details of a specific event.
        /calendar/:id (DELETE): Delete a specific event.