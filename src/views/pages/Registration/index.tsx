import React from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from 'axios'

import {
  Box,
  Button,
  CircularProgress,
  FormLabel,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
 } from '@material-ui/core';
 import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import NumberFormat from 'views/components/NumberFormat';
import Modal from 'views/components/Modal';

type Inputs = {
  name?: string,
  phone?: string | number,
  gender?: string,
  bloodType?: string,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTypography-h1': {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 'unset',
      },
      '& .MuiTypography-body1': {
        fontSize: 14,
      },
      '& .MuiPaper-outlined': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
      '& .MuiButton-containedSizeLarge': {
        fontWeight: 600,
      },
      '& a': {
        textDecoration: 'none',
        color: theme.palette.primary.main,
      },
    },
    spinner: {
      color: '#ffffff',
    }
  }),
);

const Registration: React.FC = () => {
  const classes = useStyles();
  const { control, handleSubmit, setValue, reset } = useForm<Inputs>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (!data.name || isLoading) return;

      setIsLoading(true);

      await axios.post(`${process.env.REACT_APP_BASE_URL}pendaftaran/`, {
        'EventId': '1e290a49-a1b6-4ace-8243-32216bcc9008', 
        'NameComplete': data.name, 
        'MobilePhoneNumber': data.phone,
        'Gender': data.gender,
        'BloodType': data.bloodType,
        'registrationDate': new Date(),
      })

      reset();
      setValue('phone', '');
      toggleModal(true)();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const toggleModal = (value: boolean) => () => setIsOpen(value);

  return (
    <div className={classes.root}>
      <Box mb={3}>
        <Paper variant="outlined">
          <Box p={3} textAlign="center">
            <Typography variant="h1">
              Formulir Donor Darah
            </Typography>
            <Typography>
              27 Juni 2021 / 17 Dzul Qa‘dah 1442H
            </Typography>
            <Typography>
              <a href="https://alimannarogong.info/">
                Masjid Jami' Al-Iman Narogong
              </a>
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Paper variant="outlined">
        <Box p={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      required
                      variant="outlined"
                      label="Nama"
                      placeholder="Nama lengkap sesuai KTP"
                      {...field}
                    />
                  )}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      required
                      variant="outlined"
                      label="Nomor telepon"
                      placeholder="Utamakan nomor WhatsApp"
                      InputProps={{
                        inputComponent: NumberFormat as any,
                      }}
                      {...field}
                    />
                  )}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">Jenis kelamin</FormLabel>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup aria-label="gender" {...field}>
                        <Grid container>
                          <Grid item xs={6}>
                            <FormControlLabel value="male" control={<Radio />} label="Pria" />
                          </Grid>
                          <Grid item xs={6}>
                            <FormControlLabel value="female" control={<Radio />} label="Wanita" />
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    )}
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">Golongan darah</FormLabel>
                  <Controller
                    name="bloodType"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup aria-label="bloodType" {...field}>
                        <Grid container>
                          <Grid item xs={3}>
                            <FormControlLabel value="a" control={<Radio />} label="A" />
                          </Grid>
                          <Grid item xs={3}>
                            <FormControlLabel value="b" control={<Radio />} label="B" />
                          </Grid>
                          <Grid item xs={3}>
                            <FormControlLabel value="ab" control={<Radio />} label="AB" />
                          </Grid>
                          <Grid item xs={3}>
                            <FormControlLabel value="o" control={<Radio />} label="O" />
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    )}
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  size="large"
                  type="submit"
                >
                  {isLoading
                    ? <CircularProgress size={26} className={classes.spinner} />
                    : 'Daftar'
                  }
                </Button>
                <Grid container justify="flex-end">
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
      <Modal
        open={isOpen}
        onClose={toggleModal(false)}
        title="Pendaftaran berhasil"
        description="Selamat, Anda telah terdaftar. Ayo jadi pahlawan bagi sesama! Setetes darah Anda sangat berarti bagi yang membutuhkan."
      />
    </div>
  )
}

export default Registration;
