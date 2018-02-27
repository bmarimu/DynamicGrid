using sample_GridStack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace sample_GridStack.Controllers
{
    public class SearchDetailsController : Controller
    {
        // GET: SearchDetails
        public ActionResult Index()
        {
            SearchPeopleDetailModel model = GetPeopleDetail();
            return View("SearchDetails",model);
        }

        private SearchPeopleDetailModel GetPeopleDetail()
        {
            SearchPeopleDetailModel peopleDetailModel = new SearchPeopleDetailModel()
            {
                AlternateContact = "4129512427",
                CellPhone = "4129512427",
                Company = "CEI",
                Department = "Soultions",
                DepartmentNumber = "",
                Email = "bmarimuthu@duqlight.com",
                FaxNumber = "4129512427",
                FirstName = "Balaji",
                Group = "",
                JobTitle = "Software Engineer",
                LastName = "Marimuthu",
                MailDrop = "bmarimuthu@duqlight.com",
                OfficePhone = "4129512427",
                OrgChartLink = "",
                ProfileSuccessfactorsLink = "",
                WorkLocation = "Smithfield"
            };

            return peopleDetailModel;
        }
    }
}