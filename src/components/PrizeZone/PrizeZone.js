import React from 'react';
import { Grid } from '@mui/material';
import Prize from '../Prize';

const firstPrize = `Gana $500.000 pesos con el Caribe Burger Tour. El comensal que recorra más restaurantes obtendrá un bono de $500 mil pesos redimibles en el restaurante ganador`
const discountsPrize = `Adicional a ello estaremos entregando descuestos acumulables por cada restaurante que visites. ¡Cada restaurante que visites suma un 1% de descuento! ¡Sí, has leído bien! Si visitas 10 restaurantes, obtienes un 10% de descuento para disfrutar en cualquier restaurante participante durante todo el año 2023. ¡Lleva tu cartón con los sellos y aprovecha estos descuentos exclusivos en cada visita! ¡No te pierdas la oportunidad de vivir una experiencia gastronómica única y ser recompensado por tu pasión por las hamburguesas! `

const PrizeZone = () => {
  return (
    <Grid container spacing={2} sx={{ my: '50px', mx: 'auto', width: '100% !important', maxWidth: '1200px' }}>
      <Grid item xs={12} sm={6}>
        <Prize imageLink='/assets/prize.png' text={firstPrize} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Prize imageLink='/assets/discount.jpg' text={discountsPrize}/>
      </Grid>
    </Grid>
  );
};

export default PrizeZone;
