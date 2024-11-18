import Settings from './src/settings';

export default {
  gitlab: {
    // url: 'https://gitlab.mycompany.com',
	url: 'https://gitlab.com',
    token: 'glpat-yH6VQyb6fApK6A4PRVbJ',
    projectId: null,
    listArchivedProjects: true,
    sessionCookie: "",
  },
  github: {
    // baseUrl: 'https://github.mycompany.com:123/etc',
    // apiUrl: 'https://api.github.mycompany.com',
	baseUrl: 'https://github.com',
	apiUrl: 'https://api.github.com',
    owner: 'er-navalgupta',
    ownerIsOrg: false,
    token: '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',
    token_owner: 'er-navalgupta',
    repo: 'GitLabMigratedRepo',
    recreateRepo: false,
  },
  s3: {
    accessKeyId: '{{accessKeyId}}',
    secretAccessKey: '{{secretAccessKey}}',
    bucket: 'my-gitlab-bucket',
    region: null,
  },
  usermap: {
    'navalgupta': 'er-navalgupta',
  },
  projectmap: {
    'SF-POCs/java-gradle': 'er-navalgupta/GitLabMigratedRepo',
  },
  conversion: {
    useLowerCaseLabels: true,
  },
  transfer: {
    description: true,
    milestones: true,
    labels: true,
    issues: true,
    mergeRequests: true,
    releases: true,
  },
  dryRun: false,
  exportUsers: false,
  useIssueImportAPI: true,
  usePlaceholderMilestonesForMissingMilestones: true,
  usePlaceholderIssuesForMissingIssues: true,
  useReplacementIssuesForCreationFails: true,
  useIssuesForAllMergeRequests: false,
  filterByLabel: undefined,
  trimOversizedLabelDescriptions: false,
  skipMergeRequestStates: [],
  skipMatchingComments: [],
  mergeRequests: {
    logFile: './merge-requests.json',
    log: false,
  },
} as Settings;
