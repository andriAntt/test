import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Property } from '@/domains/property/types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property: { image, title, id, houseType, rooms, bads, area, price, location, views },
}) => (
  <Card style={{ width: '30%', height: '400px', margin: '10px', position: 'relative' }}>
    <FavoriteBorderOutlinedIcon
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '5px',
      }}
    />
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        ID: {id} | {houseType} | {location} <br />
        {rooms} Zimmer | {bads} Bad | {area} m<sup>2</sup> | Kaufen
      </Typography>
      <Typography variant="h6">{price} €</Typography>
    </CardContent>

    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <VisibilityOutlinedIcon style={{ marginRight: '5px' }} />
      <Typography variant="body2">{views}</Typography>
    </div>
  </Card>
);

export default PropertyCard;
