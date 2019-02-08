from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import *
from .policy import pol


# function that prints all the reports
def get_reports(report_pk):
    # queryset = Report.objects.all()
    queryset = Report.objects.filter(id=report_pk)
    for i in queryset:
        data = {
            "report_pk": report_pk,
            "title": i.title,
            "date_created": i.date_created,
            "submitted": i.submitted,
            "date_submitted": i.date_submitted,
        }
        # append the sections for each report
        data.update(get_sections(i.id))

    # return JsonResponse(data)
    return data

# function that gets all the sections
# takes report_id param
def get_sections(r_id):
    # create a dict of arrays for section
    section_set = {"sections": []}
    queryset = Section.objects.filter(report_id=r_id)
    # queryset = Section.objects.all()
    for i in queryset:
        data = {
            "id": i.id,
            "completed": i.completed,
            "title": i.title,
            "html_description": i.html_description,
        }
        # append the fields for corresponding section
        data.update(get_fields(i.id))
        # append section to the array
        section_set["sections"].append(data.copy())

    return section_set

# function that gets all the fields
# takes section_id param
def get_fields(s_id):
    # create dict of arrays for fields
    field_set = {"fields": []}
    queryset = Field.objects.filter(section_id=s_id).order_by('number')

    for i in queryset:
        # function to print corresponding datatype
        key, value = get_datatype(i)
        data = {
            "field_name": i.field_name,
            "label": i.label,
            "type": i.type,
            "number": i.number,
            key: value
        }
        # append the fields to array
        # use copy() to avoid overwriting
        field_set["fields"].append(data.copy())

    return field_set

# function to convert value into JSON
def to_json(convert):
    return {"value": convert}

# function that gets corresponding
# data type
def get_datatype(self):
    if self.type == "boolean":
        if self.data_bool:
            return "data_bool", True
        else:
            return "data_bool", False
    elif self.type == "decimal":
        return "decimal", self.data_decimal
    elif self.type == "date":
        return "date", "{}".format(self.data_date)
    elif self.type == "file":
        return "file", "{}".format(self.data_file)
    elif self.type == "string":
        return "string", "{}".format(self.data_string)
    elif self.type == "integer":
        return "integer", self.data_integer


# API Endpoints
@api_view(['POST'])
def report(request):
    '''
    Generate a new empty report and return it
    '''
    
    # Create the report
    report = Report.objects.create(user_id=request.user, title=request.data['title'], date_created=datetime.date.today())
    report.save()

    # Create the sections
    for i in range(len(pol.sections)):
        section = pol.sections[i]
        s = Section.objects.create(report_id=report, auto_submit=section.auto_submit, required=section.required, completed=False, title=section.title, html_description=section.html_description, number=i)
        s.save()

        # Create the fields
        j = 0
        for key in section.fields:
            field = section.fields[key]
            f = Field.objects.create(section_id=s, field_name=key, label=field['label'], number=j, type=field['type'], completed=False)
            f.save()
            j = j+1
    
    # Return the newly created report
    data = get_reports(report.id)
    return JsonResponse(data)

# List of reports
@api_view(['GET'])
def reports(request):
    report_set = {"reports": []}
    queryset = Report.objects.all().filter(user_id=request.user.id).order_by('date_created')
    for i in queryset:
        data = {
            "user_id": request.user.id,
            "report_pk": i.id,
            "title": i.title,
            "date_created": i.date_created,
            "submitted": i.submitted,
            "date_submitted": i.date_submitted,
        }
        # append the sections for each report
        report_set["reports"].append(data.copy())

    return JsonResponse(report_set)


@api_view(['GET', 'PUT', 'DELETE'])
def report_detail(request, report_pk):
    if request.method == 'GET':
        data = get_reports(report_pk)
        return JsonResponse(data)
    elif request.method == 'PUT':
        return JsonResponse({"message": "Report submitted."})
    elif request.method == 'DELETE':
        return JsonResponse({"message": "Deleted report {0}.".format(report_pk)})

@api_view(['PUT'])
def section(request, report_pk, section_pk):
    '''
    Update a section with new data.
    '''
    data = {
        "message": "Updated report {0}, section {1}.".format(report_pk, section_pk),
        "fields": {
            "international": True,
            "travel_date": "2012-04-23T18:25:43.511Z",
            "fare": "1024.99",
            "lowest_fare_screenshot": "image",
        }
    }

    return JsonResponse(data)
