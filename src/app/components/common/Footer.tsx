import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#2D423A', color: 'white', padding: '40px', marginTop: 'auto' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >

        <Box>
          <Box display="flex" flexDirection="column">
            <Box mb={2}>
              <img
                src="/logo.png"
                alt="Fylpi Logo"
                style={{ width: '50px', height: '50px' }}
              />
            </Box>
            <Typography variant="body1" gutterBottom>
              Fylpi Immo-online GmbH
            </Typography>
            <Typography variant="body2" gutterBottom>
              Forchheimergasse 3/13, 1230 Wien, Österreich
            </Typography>
            <Typography variant="body2">
              <Link href="mailto:office@fylpi.at" color="inherit" underline="none">
                office@fylpi.at
              </Link>{' '}
              |{' '}
              <Link href="https://www.fylpi.at" target="_blank" rel="noopener" color="inherit" underline="none">
                www.fylpi.at
              </Link>
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <YouTubeIcon sx={{ fontSize: '30px', mr: 1 }} />
              <Typography variant="body2">
                <Link href="https://www.youtube.com" target="_blank" rel="noopener" color="inherit" underline="none">
                  YouTube
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography variant="body1" gutterBottom>
            Über uns
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Kontaktieren Sie uns
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Mein Konto
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Kaufen
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Mieten
            </Link>
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" gutterBottom>
            FAQ
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Service rund um die Immobilie
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Praktische Anleitungen
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Wissen rund um die Immobilie
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">
              Beratungsdienste
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, borderTop: '1px solid #FFFFFF50', pt: 2 }}>
        <Typography variant="body2">
          © 2024 Fylpi. Alle Rechte vorbehalten.
        </Typography>

        <Box>
          <Link href="#" color="inherit" underline="none" sx={{ mx: 2 }}>
            Impressum
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ mx: 2 }}>
            Nutzungsbedingungen
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
