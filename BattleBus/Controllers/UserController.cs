using BattleBus.Interfaces;
using BattleBus.Model;
using Microsoft.AspNetCore.Mvc;

namespace BattleBus.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IDbService _db;

        public UserController(ILogger<WeatherForecastController> logger, IDbService db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet(Name = "GetUser")]
        public User Get(string userName)
        {
            var user = _db.GetUsers().SingleOrDefault(user => String.Equals(user.UserName, userName, StringComparison.OrdinalIgnoreCase));
            return user;
        }
    }
}
