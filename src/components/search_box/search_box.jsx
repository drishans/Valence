import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux

import withUiActions from '../../hoc/uiHoc';
import { fetchSearchData } from '../../store/actions/searchActions';


import './Search_box.css';
