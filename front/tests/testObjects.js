const testReport = {
    "title": "New Report 1",
    "report_pk": 2,
    "date_submitted": "2019-03-04T08:00:00Z",
    "sections": [
        {
            "title": "General Info",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "boolean",
                    "label": "Have you taken this trip already?",
                    "field_name": "after_trip",
                    "value": false
                }
            ],
            "completed": false,
            "id": 10,
            "html_description": "<p>Each section of this report is designed to guide you through the reimbursement process. Please read through each and answer as many questions as you can that apply to you.</p><p>Be sure to click 'Save' after completing each section. Your entered data will be saved as you progress. You may also receive feedback from sections regarding policy restrictions and special requirements.</p>"
        },
        {
            "title": "Pre-trip Planning",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "date",
                    "label": "Departure date",
                    "field_name": "departure_date",
                    "value": "None"
                },
                {
                    "field_type": "date",
                    "label": "Return date",
                    "field_name": "return_date",
                    "value": "None"
                },
                {
                    "field_type": "file",
                    "label": "Screenshot of least expensive ticket fare",
                    "field_name": "screenshot",
                    "value": ""
                },
                {
                    "field_type": "date",
                    "label": "Date of screenshot",
                    "field_name": "screenshot_date",
                    "value": "None"
                },
                {
                    "field_type": "decimal",
                    "label": "Lowest fare",
                    "field_name": "lowest_fare",
                    "value": "0.00"
                },
                {
                    "field_type": "decimal",
                    "label": "Flight duration of lowest fare (hours)",
                    "field_name": "lowest_fare_duration",
                    "value": "0.00"
                },
                {
                    "field_type": "decimal",
                    "label": "Fare of your preferred flight",
                    "field_name": "preferred_flight_fare", "value": "0.00"
                },
                {
                    "field_type": "decimal",
                    "label": "Flight duration of your preferred flight (hours)",
                    "field_name": "preferred_flight_duration",
                    "value": "0.00"
                },
                {
                    "field_type": "boolean",
                    "label": "Is this an international flight?",
                    "field_name": "international_flight",
                    "value": false
                }
            ],
            "completed": false,
            "id": 11,
            "html_description": "<p>At least 14 days before buying tickets for your trip, take a screenshot of a flight search showing the least expensive fare available for the dates you need to travel. Include fares from multiple airlines if possible. This information will be used to calculate reimbursable fare amounts.</p>"
        },
        {
            "title": "Flight Info",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "date",
                    "label": "Actual departure date",
                    "field_name": "departure_date",
                    "value": "None"
                },
                {
                    "field_type": "date",
                    "label": "Actual return date",
                    "field_name": "return_date",
                    "value": "None"
                },
                {
                    "field_type": "decimal",
                    "label": "Ticket fare",
                    "field_name": "fare",
                    "value": "0.00"
                },
                {
                    "field_type": "file",
                    "label": "Screenshot of confirmation of purchase",
                    "field_name": "confirmation_screenshot",
                    "value": ""
                },
                {
                    "field_type": "boolean",
                    "label": "Was this an international flight?",
                    "field_name": "international_flight",
                    "value": false
                }
            ],
            "completed": false,
            "id": 12,
            "html_description": "<p>Enter the details of your flight once you have made your purchase.</p>"
        },
        {
            "title": "Hotel / Lodging",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "decimal",
                    "label": "USGSA Per diem rate",
                    "field_name": "per_diem_rate",
                    "value": "0.00"
                },
                {
                    "field_type": "decimal",
                    "label": "Total cost for lodging",
                    "field_name": "cost",
                    "value": "0.00"
                },
                {
                    "field_type": "date",
                    "label": "Check-in date",
                    "field_name": "check_in_date",
                    "value": "None"
                },
                {
                    "field_type": "date",
                    "label": "Check-out date",
                    "field_name": "check_out_date",
                    "value": "None"
                },
                {
                    "field_type": "file",
                    "label": "Screenshot of invoice",
                    "field_name": "invoice_screenshot",
                    "value": ""
                }
            ],
            "completed": false,
            "id": 13,
            "html_description": "<p>Please submit a receipt from your hotel including both the total amount and the dates of your stay. Per diem rates can be found on <a href='https://www.gsa.gov/travel/plan-book/per-diem-rates' target='_blank'>the U.S. GSA website</a>.</p>"},
            {
                "title": "Local Transportation",
                "rule_violations": [],
                "fields": [
                    {
                        "field_type": "decimal",
                        "label": "Total cost of local transportation",
                        "field_name": "cost",
                        "value": "0.00"
                    }
                ],
                "completed": false,
                "id": 14,
                "html_description": "<p>This amount includes taxis, uber, and public transportation.</p>"
            },
            {
                "title": "Per Diem and Other Expenses",
                "rule_violations": [],
                "fields": [
                    {
                        "field_type": "decimal",
                        "label": "Per diem rate",
                        "field_name": "rate",
                        "value": "0.00"
                    },
                    {
                        "field_type": "integer",
                        "label": "Number of full days of travel",
                        "field_name": "full_days",
                        "value": 0
                    },
                    {
                        "field_type": "integer",
                        "label": "Number of partial days of travel",
                        "field_name": "partial_days",
                        "value": 0
                    },
                    {
                        "field_type": "decimal",
                        "label": "Total Cost for meals and incidentals",
                        "field_name": "cost",
                        "value": "0.00"
                    }
                ],
                "completed": false,
                "id": 15,
                "html_description": "<p>Your per diem allowance is used to cover meals and incidental expenses. The rate for your travel destination can be found on the following websites:</p><ul><li><a href='https://www.gsa.gov/perdiem' target='_blank'>US General Serices Administration</a> for travel in the United States</li><li><a href='https://aoprals.state.gov/web920/per_diem.asp' target='_blank'>US Department of State</a> for travel outside the United States</li></ul><p>You may request up to 100% of the listed rate for a full day of travel, or 75% for a partial day of travel."
            },
            {
                "title": "Payment Option - Paypal",
                "rule_violations": [],
                "fields": [
                    {
                        "field_type": "string",
                        "label": "Email address used with Paypal",
                        "field_name": "paypal_email",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Preferred currency",
                        "field_name": "preferred_currency",
                        "value": ""
                    }
                ],
                "completed": false,
                "id": 16,
                "html_description": "<p>Complete this section if you wish to be reimbursed via Paypal. This is the preferred reimbursement method of Software Freedom Conservancy.</p>"
            },
            {
                "title": "Payment Option - Check",
                "rule_violations": [],
                "fields": [
                    {
                        "field_type": "string",
                        "label": "Street address",
                        "field_name": "address_1",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Street address 2",
                        "field_name": "address_2",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "City",
                        "field_name": "city",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "State",
                        "field_name": "state",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Zip code",
                        "field_name": "zip",
                        "value": ""
                    }
                ],
                "completed": false,
                "id": 17,
                "html_description": "<p>Complete this section if you wish to be reimbursed in USD via check sent by mail.</p>"
            },
            {
                "title": "Payment Option - Bank Wire",
                "rule_violations": [],
                "fields": [
                    {
                        "field_type": "string",
                        "label": "Full name of account holder",
                        "field_name": "name",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Street address",
                        "field_name": "address_1",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Street address 2",
                        "field_name": "address_2",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "City",
                        "field_name": "city",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "State",
                        "field_name": "state",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Zip code",
                        "field_name": "zip",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Account number",
                        "field_name": "account",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Preferred currency",
                        "field_name": "currency",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Bank name",
                        "field_name": "bank_name",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Bank address",
                        "field_name": "bank_address",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Bank ACH/ABA routing number (US) or SWIFT/BIC code (non-US)",
                        "field_name": "routing_number",
                        "value": ""
                    },
                    {
                        "field_type": "string",
                        "label": "Additional information (see SFC policy)",
                        "field_name": "additional_info",
                        "value": ""
                    }
                ],
                "completed": false,
                "id": 18,
                "html_description": "<p>Complete this section if you wish to be wired the amount to your bank in your local currency. Please fill in as much of the following information as is possible. Please refer to the <a href='https://sfconservancy.org/projects/policies/conservancy-travel-policy.html' target='_blank'>SFC travel policy</a> for additional bank information required for certain countries.</p>"
            }
        ],
        "submitted": false,
        "reference_number": "1234",
        "date_created": "2019-03-04T08:00:00Z"
};

const typeNewExpectedHTML = `<div class="modal fade" id="newReportModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="newReportModalLabel">New Report 1</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body" id="newReportModalBody"><div class="accordion" id="newReportAccordion"><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-10-collapse">General Info</button><i id="section-10-state"></i></h2></div><div id="section-10-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Each section of this report is designed to guide you through the reimbursement process. Please read through each and answer as many questions as you can that apply to you.</p><p>Be sure to click 'Save' after completing each section. Your entered data will be saved as you progress. You may also receive feedback from sections regarding policy restrictions and special requirements.</p><form class="form section-form" id="section-10-form" data-rid="2" data-sid="10"><div class="form-group row"><label class="col-sm-4 col-form" for="section-10-after_trip">Have you taken this trip already?: </label><div class="col-sm-6"><select name="after_trip" id="section-10-after_trip" class="form-control"><option value="true">Yes</option><option value="false" selected="selected">No</option></select></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-11-collapse">Pre-trip Planning</button><i id="section-11-state"></i></h2></div><div id="section-11-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>At least 14 days before buying tickets for your trip, take a screenshot of a flight search showing the least expensive fare available for the dates you need to travel. Include fares from multiple airlines if possible. This information will be used to calculate reimbursable fare amounts.</p><form class="form section-form" id="section-11-form" data-rid="2" data-sid="11"><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-departure_date">Departure date: </label><div class="col-sm-6"><input name="departure_date" id="section-11-departure_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-return_date">Return date: </label><div class="col-sm-6"><input name="return_date" id="section-11-return_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-screenshot">Screenshot of least expensive ticket fare: </label><div class="col-sm-6"><input name="screenshot" id="section-11-screenshot" type="file" class="form-control-file"><p class="form-text"></p></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-screenshot_date">Date of screenshot: </label><div class="col-sm-6"><input name="screenshot_date" id="section-11-screenshot_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-lowest_fare">Lowest fare: </label><div class="col-sm-6"><input name="lowest_fare" id="section-11-lowest_fare" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-lowest_fare_duration">Flight duration of lowest fare (hours): </label><div class="col-sm-6"><input name="lowest_fare_duration" id="section-11-lowest_fare_duration" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-preferred_flight_fare">Fare of your preferred flight: </label><div class="col-sm-6"><input name="preferred_flight_fare" id="section-11-preferred_flight_fare" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-preferred_flight_duration">Flight duration of your preferred flight (hours): </label><div class="col-sm-6"><input name="preferred_flight_duration" id="section-11-preferred_flight_duration" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-international_flight">Is this an international flight?: </label><div class="col-sm-6"><select name="international_flight" id="section-11-international_flight" class="form-control"><option value="true">Yes</option><option value="false" selected="selected">No</option></select></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-12-collapse">Flight Info</button><i id="section-12-state"></i></h2></div><div id="section-12-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Enter the details of your flight once you have made your purchase.</p><form class="form section-form" id="section-12-form" data-rid="2" data-sid="12"><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-departure_date">Actual departure date: </label><div class="col-sm-6"><input name="departure_date" id="section-12-departure_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-return_date">Actual return date: </label><div class="col-sm-6"><input name="return_date" id="section-12-return_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-fare">Ticket fare: </label><div class="col-sm-6"><input name="fare" id="section-12-fare" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-confirmation_screenshot">Screenshot of confirmation of purchase: </label><div class="col-sm-6"><input name="confirmation_screenshot" id="section-12-confirmation_screenshot" type="file" class="form-control-file"><p class="form-text"></p></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-international_flight">Was this an international flight?: </label><div class="col-sm-6"><select name="international_flight" id="section-12-international_flight" class="form-control"><option value="true">Yes</option><option value="false" selected="selected">No</option></select></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-13-collapse">Hotel / Lodging</button><i id="section-13-state"></i></h2></div><div id="section-13-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Please submit a receipt from your hotel including both the total amount and the dates of your stay. Per diem rates can be found on <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates" target="_blank">the U.S. GSA website</a>.</p><form class="form section-form" id="section-13-form" data-rid="2" data-sid="13"><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-per_diem_rate">USGSA Per diem rate: </label><div class="col-sm-6"><input name="per_diem_rate" id="section-13-per_diem_rate" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-cost">Total cost for lodging: </label><div class="col-sm-6"><input name="cost" id="section-13-cost" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-check_in_date">Check-in date: </label><div class="col-sm-6"><input name="check_in_date" id="section-13-check_in_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-check_out_date">Check-out date: </label><div class="col-sm-6"><input name="check_out_date" id="section-13-check_out_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-invoice_screenshot">Screenshot of invoice: </label><div class="col-sm-6"><input name="invoice_screenshot" id="section-13-invoice_screenshot" type="file" class="form-control-file"><p class="form-text"></p></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-14-collapse">Local Transportation</button><i id="section-14-state"></i></h2></div><div id="section-14-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>This amount includes taxis, uber, and public transportation.</p><form class="form section-form" id="section-14-form" data-rid="2" data-sid="14"><div class="form-group row"><label class="col-sm-4 col-form" for="section-14-cost">Total cost of local transportation: </label><div class="col-sm-6"><input name="cost" id="section-14-cost" type="number" class="form-control" step="0.01" min="0"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-15-collapse">Per Diem and Other Expenses</button><i id="section-15-state"></i></h2></div><div id="section-15-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Your per diem allowance is used to cover meals and incidental expenses. The rate for your travel destination can be found on the following websites:</p><ul><li><a href="https://www.gsa.gov/perdiem" target="_blank">US General Serices Administration</a> for travel in the United States</li><li><a href="https://aoprals.state.gov/web920/per_diem.asp" target="_blank">US Department of State</a> for travel outside the United States</li></ul><p>You may request up to 100% of the listed rate for a full day of travel, or 75% for a partial day of travel.</p><form class="form section-form" id="section-15-form" data-rid="2" data-sid="15"><div class="form-group row"><label class="col-sm-4 col-form" for="section-15-rate">Per diem rate: </label><div class="col-sm-6"><input name="rate" id="section-15-rate" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-15-full_days">Number of full days of travel: </label><div class="col-sm-6"><input name="full_days" id="section-15-full_days" type="number" class="form-control" step="1" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-15-partial_days">Number of partial days of travel: </label><div class="col-sm-6"><input name="partial_days" id="section-15-partial_days" type="number" class="form-control" step="1" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-15-cost">Total Cost for meals and incidentals: </label><div class="col-sm-6"><input name="cost" id="section-15-cost" type="number" class="form-control" step="0.01" min="0"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-16-collapse">Payment Option - Paypal</button><i id="section-16-state"></i></h2></div><div id="section-16-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Complete this section if you wish to be reimbursed via Paypal. This is the preferred reimbursement method of Software Freedom Conservancy.</p><form class="form section-form" id="section-16-form" data-rid="2" data-sid="16"><div class="form-group row"><label class="col-sm-4 col-form" for="section-16-paypal_email">Email address used with Paypal: </label><div class="col-sm-6"><input name="paypal_email" id="section-16-paypal_email" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-16-preferred_currency">Preferred currency: </label><div class="col-sm-6"><input name="preferred_currency" id="section-16-preferred_currency" type="text" class="form-control"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-17-collapse">Payment Option - Check</button><i id="section-17-state"></i></h2></div><div id="section-17-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Complete this section if you wish to be reimbursed in USD via check sent by mail.</p><form class="form section-form" id="section-17-form" data-rid="2" data-sid="17"><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-address_1">Street address: </label><div class="col-sm-6"><input name="address_1" id="section-17-address_1" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-address_2">Street address 2: </label><div class="col-sm-6"><input name="address_2" id="section-17-address_2" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-city">City: </label><div class="col-sm-6"><input name="city" id="section-17-city" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-state">State: </label><div class="col-sm-6"><input name="state" id="section-17-state" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-zip">Zip code: </label><div class="col-sm-6"><input name="zip" id="section-17-zip" type="text" class="form-control"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-18-collapse">Payment Option - Bank Wire</button><i id="section-18-state"></i></h2></div><div id="section-18-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Complete this section if you wish to be wired the amount to your bank in your local currency. Please fill in as much of the following information as is possible. Please refer to the <a href="https://sfconservancy.org/projects/policies/conservancy-travel-policy.html" target="_blank">SFC travel policy</a> for additional bank information required for certain countries.</p><form class="form section-form" id="section-18-form" data-rid="2" data-sid="18"><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-name">Full name of account holder: </label><div class="col-sm-6"><input name="name" id="section-18-name" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-address_1">Street address: </label><div class="col-sm-6"><input name="address_1" id="section-18-address_1" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-address_2">Street address 2: </label><div class="col-sm-6"><input name="address_2" id="section-18-address_2" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-city">City: </label><div class="col-sm-6"><input name="city" id="section-18-city" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-state">State: </label><div class="col-sm-6"><input name="state" id="section-18-state" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-zip">Zip code: </label><div class="col-sm-6"><input name="zip" id="section-18-zip" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-account">Account number: </label><div class="col-sm-6"><input name="account" id="section-18-account" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-currency">Preferred currency: </label><div class="col-sm-6"><input name="currency" id="section-18-currency" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-bank_name">Bank name: </label><div class="col-sm-6"><input name="bank_name" id="section-18-bank_name" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-bank_address">Bank address: </label><div class="col-sm-6"><input name="bank_address" id="section-18-bank_address" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-routing_number">Bank ACH/ABA routing number (US) or SWIFT/BIC code (non-US): </label><div class="col-sm-6"><input name="routing_number" id="section-18-routing_number" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-additional_info">Additional information (see SFC policy): </label><div class="col-sm-6"><input name="additional_info" id="section-18-additional_info" type="text" class="form-control"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div></div></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary finalize-report" data-rid="2">Finalize Report</button>
                        <button type="button" class="btn btn-primary review-report" data-rid="2">Submit for Review</button>
                    </div>
                </div>
            </div>
        </div>`;

const typeEditExpectedHTML = `<div class="modal fade" id="editReportModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editReportModalLabel">New Report 1</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body" id="editReportModalBody"><div class="accordion" id="editReportAccordion"><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-10-collapse">General Info</button><i id="section-10-state"></i></h2></div><div id="section-10-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Each section of this report is designed to guide you through the reimbursement process. Please read through each and answer as many questions as you can that apply to you.</p><p>Be sure to click 'Save' after completing each section. Your entered data will be saved as you progress. You may also receive feedback from sections regarding policy restrictions and special requirements.</p><form class="form section-form" id="section-10-form" data-rid="2" data-sid="10"><div class="form-group row"><label class="col-sm-4 col-form" for="section-10-after_trip">Have you taken this trip already?: </label><div class="col-sm-6"><select name="after_trip" id="section-10-after_trip" class="form-control"><option value="true">Yes</option><option value="false" selected="selected">No</option></select></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-11-collapse">Pre-trip Planning</button><i id="section-11-state"></i></h2></div><div id="section-11-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>At least 14 days before buying tickets for your trip, take a screenshot of a flight search showing the least expensive fare available for the dates you need to travel. Include fares from multiple airlines if possible. This information will be used to calculate reimbursable fare amounts.</p><form class="form section-form" id="section-11-form" data-rid="2" data-sid="11"><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-departure_date">Departure date: </label><div class="col-sm-6"><input name="departure_date" id="section-11-departure_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-return_date">Return date: </label><div class="col-sm-6"><input name="return_date" id="section-11-return_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-screenshot">Screenshot of least expensive ticket fare: </label><div class="col-sm-6"><input name="screenshot" id="section-11-screenshot" type="file" class="form-control-file"><p class="form-text"></p></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-screenshot_date">Date of screenshot: </label><div class="col-sm-6"><input name="screenshot_date" id="section-11-screenshot_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-lowest_fare">Lowest fare: </label><div class="col-sm-6"><input name="lowest_fare" id="section-11-lowest_fare" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-lowest_fare_duration">Flight duration of lowest fare (hours): </label><div class="col-sm-6"><input name="lowest_fare_duration" id="section-11-lowest_fare_duration" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-preferred_flight_fare">Fare of your preferred flight: </label><div class="col-sm-6"><input name="preferred_flight_fare" id="section-11-preferred_flight_fare" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-preferred_flight_duration">Flight duration of your preferred flight (hours): </label><div class="col-sm-6"><input name="preferred_flight_duration" id="section-11-preferred_flight_duration" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-11-international_flight">Is this an international flight?: </label><div class="col-sm-6"><select name="international_flight" id="section-11-international_flight" class="form-control"><option value="true">Yes</option><option value="false" selected="selected">No</option></select></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-12-collapse">Flight Info</button><i id="section-12-state"></i></h2></div><div id="section-12-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Enter the details of your flight once you have made your purchase.</p><form class="form section-form" id="section-12-form" data-rid="2" data-sid="12"><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-departure_date">Actual departure date: </label><div class="col-sm-6"><input name="departure_date" id="section-12-departure_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-return_date">Actual return date: </label><div class="col-sm-6"><input name="return_date" id="section-12-return_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-fare">Ticket fare: </label><div class="col-sm-6"><input name="fare" id="section-12-fare" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-confirmation_screenshot">Screenshot of confirmation of purchase: </label><div class="col-sm-6"><input name="confirmation_screenshot" id="section-12-confirmation_screenshot" type="file" class="form-control-file"><p class="form-text"></p></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-12-international_flight">Was this an international flight?: </label><div class="col-sm-6"><select name="international_flight" id="section-12-international_flight" class="form-control"><option value="true">Yes</option><option value="false" selected="selected">No</option></select></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-13-collapse">Hotel / Lodging</button><i id="section-13-state"></i></h2></div><div id="section-13-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Please submit a receipt from your hotel including both the total amount and the dates of your stay. Per diem rates can be found on <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates" target="_blank">the U.S. GSA website</a>.</p><form class="form section-form" id="section-13-form" data-rid="2" data-sid="13"><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-per_diem_rate">USGSA Per diem rate: </label><div class="col-sm-6"><input name="per_diem_rate" id="section-13-per_diem_rate" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-cost">Total cost for lodging: </label><div class="col-sm-6"><input name="cost" id="section-13-cost" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-check_in_date">Check-in date: </label><div class="col-sm-6"><input name="check_in_date" id="section-13-check_in_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-check_out_date">Check-out date: </label><div class="col-sm-6"><input name="check_out_date" id="section-13-check_out_date" type="date" placeholder="mm-dd-yyyy" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-13-invoice_screenshot">Screenshot of invoice: </label><div class="col-sm-6"><input name="invoice_screenshot" id="section-13-invoice_screenshot" type="file" class="form-control-file"><p class="form-text"></p></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-14-collapse">Local Transportation</button><i id="section-14-state"></i></h2></div><div id="section-14-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>This amount includes taxis, uber, and public transportation.</p><form class="form section-form" id="section-14-form" data-rid="2" data-sid="14"><div class="form-group row"><label class="col-sm-4 col-form" for="section-14-cost">Total cost of local transportation: </label><div class="col-sm-6"><input name="cost" id="section-14-cost" type="number" class="form-control" step="0.01" min="0"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-15-collapse">Per Diem and Other Expenses</button><i id="section-15-state"></i></h2></div><div id="section-15-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Your per diem allowance is used to cover meals and incidental expenses. The rate for your travel destination can be found on the following websites:</p><ul><li><a href="https://www.gsa.gov/perdiem" target="_blank">US General Serices Administration</a> for travel in the United States</li><li><a href="https://aoprals.state.gov/web920/per_diem.asp" target="_blank">US Department of State</a> for travel outside the United States</li></ul><p>You may request up to 100% of the listed rate for a full day of travel, or 75% for a partial day of travel.</p><form class="form section-form" id="section-15-form" data-rid="2" data-sid="15"><div class="form-group row"><label class="col-sm-4 col-form" for="section-15-rate">Per diem rate: </label><div class="col-sm-6"><input name="rate" id="section-15-rate" type="number" class="form-control" step="0.01" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-15-full_days">Number of full days of travel: </label><div class="col-sm-6"><input name="full_days" id="section-15-full_days" type="number" class="form-control" step="1" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-15-partial_days">Number of partial days of travel: </label><div class="col-sm-6"><input name="partial_days" id="section-15-partial_days" type="number" class="form-control" step="1" min="0"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-15-cost">Total Cost for meals and incidentals: </label><div class="col-sm-6"><input name="cost" id="section-15-cost" type="number" class="form-control" step="0.01" min="0"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-16-collapse">Payment Option - Paypal</button><i id="section-16-state"></i></h2></div><div id="section-16-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Complete this section if you wish to be reimbursed via Paypal. This is the preferred reimbursement method of Software Freedom Conservancy.</p><form class="form section-form" id="section-16-form" data-rid="2" data-sid="16"><div class="form-group row"><label class="col-sm-4 col-form" for="section-16-paypal_email">Email address used with Paypal: </label><div class="col-sm-6"><input name="paypal_email" id="section-16-paypal_email" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-16-preferred_currency">Preferred currency: </label><div class="col-sm-6"><input name="preferred_currency" id="section-16-preferred_currency" type="text" class="form-control"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-17-collapse">Payment Option - Check</button><i id="section-17-state"></i></h2></div><div id="section-17-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Complete this section if you wish to be reimbursed in USD via check sent by mail.</p><form class="form section-form" id="section-17-form" data-rid="2" data-sid="17"><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-address_1">Street address: </label><div class="col-sm-6"><input name="address_1" id="section-17-address_1" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-address_2">Street address 2: </label><div class="col-sm-6"><input name="address_2" id="section-17-address_2" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-city">City: </label><div class="col-sm-6"><input name="city" id="section-17-city" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-state">State: </label><div class="col-sm-6"><input name="state" id="section-17-state" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-17-zip">Zip code: </label><div class="col-sm-6"><input name="zip" id="section-17-zip" type="text" class="form-control"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div><div class="card"><div class="card-header"><h2 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-18-collapse">Payment Option - Bank Wire</button><i id="section-18-state"></i></h2></div><div id="section-18-collapse" class="collapse show"><div class="card-body"><div class="alert alert-danger section-alert">This section is not complete</div><p>Complete this section if you wish to be wired the amount to your bank in your local currency. Please fill in as much of the following information as is possible. Please refer to the <a href="https://sfconservancy.org/projects/policies/conservancy-travel-policy.html" target="_blank">SFC travel policy</a> for additional bank information required for certain countries.</p><form class="form section-form" id="section-18-form" data-rid="2" data-sid="18"><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-name">Full name of account holder: </label><div class="col-sm-6"><input name="name" id="section-18-name" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-address_1">Street address: </label><div class="col-sm-6"><input name="address_1" id="section-18-address_1" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-address_2">Street address 2: </label><div class="col-sm-6"><input name="address_2" id="section-18-address_2" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-city">City: </label><div class="col-sm-6"><input name="city" id="section-18-city" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-state">State: </label><div class="col-sm-6"><input name="state" id="section-18-state" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-zip">Zip code: </label><div class="col-sm-6"><input name="zip" id="section-18-zip" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-account">Account number: </label><div class="col-sm-6"><input name="account" id="section-18-account" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-currency">Preferred currency: </label><div class="col-sm-6"><input name="currency" id="section-18-currency" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-bank_name">Bank name: </label><div class="col-sm-6"><input name="bank_name" id="section-18-bank_name" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-bank_address">Bank address: </label><div class="col-sm-6"><input name="bank_address" id="section-18-bank_address" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-routing_number">Bank ACH/ABA routing number (US) or SWIFT/BIC code (non-US): </label><div class="col-sm-6"><input name="routing_number" id="section-18-routing_number" type="text" class="form-control"></div></div><div class="form-group row"><label class="col-sm-4 col-form" for="section-18-additional_info">Additional information (see SFC policy): </label><div class="col-sm-6"><input name="additional_info" id="section-18-additional_info" type="text" class="form-control"></div></div><button type="submit" class="btn btn-primary save-section">Save</button></form></div></div></div></div></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger delete-report" data-rid="2">Delete Report</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary finalize-report" data-rid="2">Finalize Report</button>
                        <button type="button" class="btn btn-primary review-report" data-rid="2">Submit for Review</button>
                    </div>
                </div>
            </div>
        </div>`;

const displayReportsOneReportExpected = `<div class="card-body"><table class="table table-striped table-responsive-sm" style="visibility: visible;"><thead><tr><th>Title</th><th>Date Created</th><th class="d-none d-md-table-cell">Date Submitted</th><th>Action</th></tr></thead><tbody><tr><td>TEST1</td><td>3/5/2019</td><td class="d-none d-md-table-cell">TBD</td><td><button type="submit" data-rid="4" class="btn btn-primary edit-report-button" data-toggle="modal" data-target="#editReportModal">Edit</button></td></tr></tbody></table></div>`;

const displayReportsTwoReportsExpected = `<div class="card-body"><table class="table table-striped table-responsive-sm" style="visibility: visible;"><thead><tr><th>Title</th><th>Date Created</th><th class="d-none d-md-table-cell">Date Submitted</th><th>Action</th></tr></thead><tbody><tr><td>TEST1</td><td>3/5/2019</td><td class="d-none d-md-table-cell">TBD</td><td><button type="submit" data-rid="4" class="btn btn-primary edit-report-button" data-toggle="modal" data-target="#editReportModal">Edit</button></td></tr><tr><td>TEST2</td><td>3/5/2019</td><td class="d-none d-md-table-cell">TBD</td><td><button type="submit" data-rid="5" class="btn btn-primary edit-report-button" data-toggle="modal" data-target="#editReportModal">Edit</button></td></tr></tbody></table></div>`;

const displayReportsOneViewableExpected = `<div class="card-body"><table class="table table-striped table-responsive-sm" style="visibility: visible;"><thead><tr><th>Title</th><th>Date Created</th><th class="d-none d-md-table-cell">Date Submitted</th><th>Action</th></tr></thead><tbody><tr><td>TEST2</td><td>3/5/2019</td><td class="d-none d-md-table-cell">3/5/2019</td><td><button type="submit" data-rid="5" class="btn btn-success view-report-button" data-toggle="modal" data-target="#viewReportModal">View</button></td></tr></tbody></table></div>`;

const updateSectionExpected = `<div class="card">
            <div class="card-header">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-1-collapse">General Info</button>
                    <i id="section-1-state"></i>
                </h2>
            </div>
            <div id="section-1-collapse" class="collapse show">
                <div class="card-body">
                    <div class="alert alert-danger section-alert">This section is not complete</div>
                    <p>Description</p>
                    <form class="form section-form" id="section-1-form" data-rid="2" data-sid="1">
                        <div class="form-group row">
                            <label class="col-sm-4 col-form" for="section-1-after_trip">Have you taken this trip already?: </label>
                            <div class="col-sm-6">
                                <select name="after_trip" id="section-1-after_trip" class="form-control">
                                    <option value="true">Yes</option>
                                    <option value="false" selected="selected">No</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary save-section">Save</button>
                    </form>
                </div>
            </div>
        </div>`;

const updateSectionCompleteNoRuleViolationsExpected = `<div class="card">
            <div class="card-header">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-1-collapse">General Info</button>
                    <i id="section-1-state" class="fas fa-check-square"></i>
                </h2>
            </div>
            <div id="section-1-collapse" class="collapse">
                <div class="card-body">
                    <p>Description</p>
                    <form class="form section-form" id="section-1-form" data-rid="2" data-sid="1">
                        <div class="form-group row">
                            <label class="col-sm-4 col-form" for="section-1-after_trip">Have you taken this trip already?: </label>
                            <div class="col-sm-6">
                                <select name="after_trip" id="section-1-after_trip" class="form-control">
                                    <option value="true">Yes</option>
                                    <option value="false" selected="selected">No</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary save-section">Save</button>
                    </form>
                </div>
            </div>
        </div>`;

const updateSectionCompleteOneRuleViolationsExpected = `<div class="card">
            <div class="card-header">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-1-collapse">General Info</button>
                    <i id="section-1-state" class="fas fa-exclamation-triangle"></i>
                </h2>
            </div>
            <div id="section-1-collapse" class="collapse show">
                <div class="card-body">
                    <p>Description</p>
                    <form class="form section-form" id="section-1-form" data-rid="2" data-sid="1">
                        <div class="form-group row">
                            <label class="col-sm-4 col-form" for="section-1-after_trip">Have you taken this trip already?: </label>
                            <div class="col-sm-6">
                                <select name="after_trip" id="section-1-after_trip" class="form-control">
                                    <option value="true">Yes</option>
                                    <option value="false" selected="selected">No</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary save-section">Save</button>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="alert alert-danger">
                        <div class="alert-heading">Rule Violations</div>
                        <hr>
                        <p><strong>Fare limit</strong><br>You did a bad thing</p>
                    </div>
                </div>
            </div>
        </div>`;

let viewReportTest1 = {
    "title": "New Report 1",
    "report_pk": 2,
    "date_submitted": "2019-03-04T08:00:00Z",
    "sections": [
        {
            "title": "General Info",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "boolean",
                    "label": "Havel you taken this trip already?",
                    "field_name": "after_trip",
                    "value": false
                }
            ],
            "completed": true,
            "id": 10,
            "html_description": "<p>Description</p>"
        }
    ],
    "submitted": false,
    "reference_number": "1234",
    "date_created": "2019-03-04T08:00:00Z"
};

let viewReportTest1Expected = `<div class="modal fade" id="viewReportModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewReportModalLabel">New Report 1 3/4/2019</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-view"><div class="card"><div class="card-header"><div class="card-body"><h4>General Info</h4><p>Havel you taken this trip already?: No</p></div></div></div></div>
                </div>
            </div>
        </div>`;

let viewReportTest2 = {
    "title": "New Report 1",
    "report_pk": 2,
    "date_submitted": "2019-03-04T08:00:00Z",
    "sections": [
        {
            "title": "General Info",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "boolean",
                    "label": "Havel you taken this trip already?",
                    "field_name": "after_trip",
                    "value": true
                }
            ],
            "completed": true,
            "id": 10,
            "html_description": "<p>Description</p>"
        }
    ],
    "submitted": false,
    "reference_number": "1234",
    "date_created": "2019-03-04T08:00:00Z"
};

let viewReportTest2Expected = `<div class="modal fade" id="viewReportModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewReportModalLabel">New Report 1 3/4/2019</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-view"><div class="card"><div class="card-header"><div class="card-body"><h4>General Info</h4><p>Havel you taken this trip already?: Yes</p></div></div></div></div>
                </div>
            </div>
        </div>`;

let viewReportTest3 = {
    "title": "New Report 1",
    "report_pk": 2,
    "date_submitted": "2019-03-04T08:00:00Z",
    "sections": [
        {
            "title": "Payment Option - Check",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "string",
                    "label": "City",
                    "field_name": "city",
                    "value": ""
                }
            ],
            "completed": true,
            "id": 10,
            "html_description": "<p>Description</p>"
        }
    ],
    "submitted": false,
    "reference_number": "1234",
    "date_created": "2019-03-04T08:00:00Z"
};

let viewReportTest3Expected = `<div class="modal fade" id="viewReportModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewReportModalLabel">New Report 1 3/4/2019</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-view"><div class="card"><div class="card-header"><div class="card-body"><h4>Payment Option - Check</h4><p>City: None</p></div></div></div></div>
                </div>
            </div>
        </div>`;

let viewReportTest4 = {
    "title": "New Report 1",
    "report_pk": 2,
    "date_submitted": "2019-03-04T08:00:00Z",
    "sections": [
        {
            "title": "Pre-trip Planning",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "date",
                    "label": "Departure date",
                    "field_name": "departure_date",
                    "value": "None"
                }
            ],
            "completed": true,
            "id": 10,
            "html_description": "<p>Description</p>"
        }
    ],
    "submitted": false,
    "reference_number": "1234",
    "date_created": "2019-03-04T08:00:00Z"
};

let viewReportTest4Expected = `<div class="modal fade" id="viewReportModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewReportModalLabel">New Report 1 3/4/2019</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-view"><div class="card"><div class="card-header"><div class="card-body"><h4>Pre-trip Planning</h4><p>Departure date: None</p></div></div></div></div>
                </div>
            </div>
        </div>`;

let viewReportTest5 = {
    "title": "New Report 1",
    "report_pk": 2,
    "date_submitted": "2019-03-04T08:00:00Z",
    "sections": [
        {
            "title": "Hotel / Lodging",
            "rule_violations": [],
            "fields": [
                {
                    "field_type": "decimal",
                    "label": "USGSA Per diem rate",
                    "field_name": "per_diem_rate",
                    "value": "0.00"
                },
                {
                    "field_type": "decimal",
                    "label": "Total cost for lodging",
                    "field_name": "cost",
                    "value": "0.00"
                },
                {
                    "field_type": "date",
                    "label": "Check-in date",
                    "field_name": "check_in_date",
                    "value": "None"
                },
                {
                    "field_type": "date",
                    "label": "Check-out date",
                    "field_name": "check_out_date",
                    "value": "None"
                },
                {
                    "field_type": "file",
                    "label": "Screenshot of invoice",
                    "field_name": "invoice_screenshot",
                    "value": ""
                }
            ],
            "completed": true,
            "id": 10,
            "html_description": "<p>Description</p>"
        }
    ],
    "submitted": false,
    "reference_number": "1234",
    "date_created": "2019-03-04T08:00:00Z"
};

let viewReportTest5Expected = `<div class="modal fade" id="viewReportModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewReportModalLabel">New Report 1 3/4/2019</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-view"><div class="card"><div class="card-header"><div class="card-body"><h4>Hotel / Lodging</h4><p>USGSA Per diem rate: 0.00</p><p>Total cost for lodging: 0.00</p><p>Check-in date: None</p><p>Check-out date: None</p><p>Screenshot of invoice: None</p></div></div></div></div>
                </div>
            </div>
        </div>`;
