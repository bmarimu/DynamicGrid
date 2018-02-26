using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace sample_GridStack.Models
{
    public class SearchPeopleDetailModel
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string JobTitle { get; set; }
        public string Company { get; set; }
        public string Department { get; set; }
        public string DepartmentNumber { get; set; }
        public string WorkLocation { get; set; }
        public string Group { get; set; }

        public string Email { get; set; }
        public string OfficePhone { get; set; }
        public string MailDrop { get; set; }
        public string AlternateContact { get; set; }
        public string CellPhone { get; set; }
        public string FaxNumber { get; set; }
        public string OrgChartLink { get; set; }
        public string ProfileSuccessfactorsLink { get; set; }
    }
}