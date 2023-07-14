using HomeworkMay10.Data;
using HomeworkMay10.Web.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeworkMay10.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("Constr");
        }
        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PersonRepository(_connectionString);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("add")]
        public void Add(Person person)
        {
            var repo = new PersonRepository(_connectionString);
            repo.Add(person);
        }
        [HttpPost]
        [Route("delete")]
        public void Delete(Person person)
        {
            var repo = new PersonRepository(_connectionString);
            repo.Delete(person.Id);
        }
    }
}
