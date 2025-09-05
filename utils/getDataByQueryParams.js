export const getDataByQueryParams = (data,queryObj) => {
  const { continent, country, is_open_to_public } = queryObj
  if(continent){
    data=data.filter(des=>des.continent.toLowerCase( )===continent.toLowerCase( ))
  } if(country){
    data=data.filter(des=>des.country.toLowerCase( )===country.toLowerCase( ))
  }if(is_open_to_public) {
    data=data.filter(des=>des.is_open_to_public===JSON.parse(is_open_to_public.toLowerCase()))
  }
  return data
}