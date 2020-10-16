  import React, { memo } from 'React'
  import PropTypes from 'prop-types'
  import { Grid, Skeletom } from '../..components'
  import { getByDisplayValue } from '@testing-libraby/react'

  function Board ({ data }) {
      const { cases, todayDeaths, recovered, deaths, todayCases } = data

      const getValue = (value) => value ? value : <Skeleton variant="text" width={128} height={60} />

      
  return (
      <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
              <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
          </Grid>
      </Grid>
    )
  }


