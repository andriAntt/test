import * as properyApi from '../api'
import { Property } from '../types';

export const getProperties = async (filters:Partial<Property> = {}, page = 1, limit = 10) => {
  try {
    const properties = await properyApi.getProperties()
    
    const filteredProperties = properties.filter((property) => {
      let isMatch = true;

      if (filters.houseType && property.houseType !== filters.houseType) {
        isMatch = false;
      }

      if (filters.rooms && property.rooms !== filters.rooms) {
        isMatch = false;
      }


      if (filters.bads && property.bads !== filters.bads) {
        isMatch = false;
      }

      return isMatch;
    });

    const startIndex = (page - 1) * limit;
    const paginatedProperties = filteredProperties.slice(startIndex, startIndex + limit);

    return {
      data: paginatedProperties,
      total: filteredProperties.length,
      currentPage: page,
      totalPages: Math.ceil(filteredProperties.length / limit),
    };
  } catch (error) {
    console.error('Error fetching properties:', error);
    return {
      data: [],
      total: 0,
      currentPage: page,
      totalPages: 0,
    };
  }
};
