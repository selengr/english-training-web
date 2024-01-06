export default class ValidationError extends Error {
  constructor(messages = 'something went wrong', name = '') {
    super(messages);
    this.name = name;
    this.message = messages;
  }
}
