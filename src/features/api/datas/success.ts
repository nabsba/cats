// !improvment  => not open for Multi-languages.
const SUCCESS_MESSAGES = {
  OK: 'Operation completed successfully.',
  CREATED: 'Resource created successfully.',
  ACCEPTED: 'Request accepted and is being processed.',
  NO_CONTENT: 'Operation successful, but no content was returned.',
  PARTIAL_CONTENT: 'Partial content delivered successfully.',
};

const SUCCESS_MESSAGES_KEYS = {
  OK: 'OK', // Success status code
  CREATED: 'CREATED', // Resource created successfully
  ACCEPTED: 'ACCEPTED', // Request accepted but processing not yet completed
  NO_CONTENT: 'NO_CONTENT', // No content in the response
  PARTIAL_CONTENT: 'PARTIAL_CONTENT',
};

const SUCCESS_STATUS = {
  OK: 200, // Success status code
  CREATED: 201, // Resource created successfully
  ACCEPTED: 202, // Request accepted but processing not yet completed
  NO_CONTENT: 204, // No content in the response
  PARTIAL_CONTENT: 206, // Partial content returned
};

export { SUCCESS_MESSAGES, SUCCESS_MESSAGES_KEYS, SUCCESS_STATUS };
