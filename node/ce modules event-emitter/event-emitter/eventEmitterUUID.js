const uuid = require('uuid');
const EventEmitter = require('events');

class UUIDGenerator extends EventEmitter {
  generateUUID() {
    this.emit('newid');
  }
  generateUUID1() {
    this.emit('newid1', { newuuid: uuid.v4() });
  }
  generateUUID1() {
    this.emit('newid1', { newuuid: uuid.v4() });
  }
  generateUUID2(data) {
    //on the lighter side
    this.emit('newid1', { newuuid: uuid.v4(), data, beta: data, sata: data });
  }
}

const uUIDGenerator = new UUIDGenerator();
//event without data
uUIDGenerator.on('newid', () => console.log('event handled!'));
//event with data
uUIDGenerator.on('newid1', eventData =>
  console.log('Received Event Data : ', eventData)
);
uUIDGenerator.generateUUID();
uUIDGenerator.generateUUID1();
uUIDGenerator.generateUUID2(' : generated');
