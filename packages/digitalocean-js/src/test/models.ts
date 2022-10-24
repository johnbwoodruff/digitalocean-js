import { ACCOUNTS } from './fixtures/accounts.fixture';
import { ACTIONS } from './fixtures/actions.fixture';
import { BILLING_HISTORY } from './fixtures/billing-history.fixture';
import { BLOCK_STORAGE_VOLUMES } from './fixtures/block-storage.fixture';
import { PROJECTS } from './fixtures/projects.fixture';

// Accounts
export const getAccounts = () => ACCOUNTS;
export const getSingleAccount = () => ACCOUNTS[0];

// Actions
export const getActions = () => ACTIONS;
export const getSingleAction = () => ACTIONS[0];

// Billing History
export const getBillingHistory = () => BILLING_HISTORY;
export const getSingleBillingHistoryItem = () => BILLING_HISTORY[0];

// Block Storage
export const getBlockStorageVolumes = () => BLOCK_STORAGE_VOLUMES;
export const getSingleBlockStorageVolume = () => BLOCK_STORAGE_VOLUMES[0];

// Projects
export const getProjects = () => PROJECTS;
export const getSingleProject = () => PROJECTS[0];
