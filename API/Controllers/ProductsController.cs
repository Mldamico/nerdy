using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{


    [HttpGet]
    public string GetProducts()
    {
        return "List of products";
    }
    
    [HttpGet("{id}")]
    public string GetProductById(int id)
    {
        return "List of products";
    }
}