

using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseController
{
    private readonly StoreContext _context;

    public BuggyController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet("notfound")]
    public ActionResult NotFoundRequest()
    {
        var thing = _context.Products.Find(5000);
        if (thing == null) return NotFound();
        return Ok();
    }
    
    [HttpGet("servererror")]
    public ActionResult ServerError()
    {
        var thing = _context.Products.Find(5000);
        var thingToReturn = thing.ToString();
        return Ok();
    }
    
    [HttpGet("badrequest")]
    public ActionResult BadRequest()
    {
        return BadRequest();
    }
    
    [HttpGet("badrequest/{id}")]
    public ActionResult BadRequestRequest(int id)
    {
        return Ok();
    }
}