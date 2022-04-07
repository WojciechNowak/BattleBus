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
        private readonly IUserService _db;

        public UserController(ILogger<WeatherForecastController> logger, IUserService db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet(Name = "GetUser")]
        public User Get(string userName)
        {
            var user = _db.GetUsers().FirstOrDefault(user => String.Equals(user.UserName, userName, StringComparison.OrdinalIgnoreCase));
            return user;
        }
    }
}
