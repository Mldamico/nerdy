using API.Dto;
using AutoMapper;
using Core.Entities;

namespace API.Helpers;

public class MappingProfiles: Profile
{
    public MappingProfiles()
    {
        CreateMap<Product, ProductToReturnDto>()
            .ForMember(x => x.ProductBrand, opt => opt.MapFrom(x => x.ProductBrand.Name))
            .ForMember(x => x.ProductType, opt => opt.MapFrom(x => x.ProductType.Name));
    }
}