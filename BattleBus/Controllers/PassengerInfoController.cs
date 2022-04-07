using BattleBus.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BattleBus.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class PassengerInfoController : ControllerBase
    {
        public static readonly object LockObject = new object();
        private readonly IPassengerInfoService _passengerInfo;

        public PassengerInfoController(IPassengerInfoService passengerInfo)
        {
            _passengerInfo = passengerInfo;
        }

        [HttpGet(Name = "GetPassengers")]
        public IEnumerable<string> Get()
        {
            lock (LockObject)
            {
                return _passengerInfo.GetPassengers().ToArray();
            }  
        }

        [HttpGet(Name = "GetOn")]
        public void GetOn(string name)
        {
            lock (LockObject)
            {
                _passengerInfo.Add(name);
            }
        }

        [HttpGet(Name = "GetOff")]
        public void GetOff(string name)
        {
            lock (LockObject)
            {
                _passengerInfo.Remove(name);
            }
        }
    }
}
