import { general } from '../index.js';
import * as selectors from './selectors.js';

export const getSignUpButton = async () => await general.find(selectors.headerButtonSignUp);
export const getSignInButton = async () => await general.find(selectors.headerButtonSignIn);
export const getHomeButton = async () => await general.find(selectors.headerButtonHome);