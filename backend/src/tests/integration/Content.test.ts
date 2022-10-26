const chai =require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
import * as Sinon from 'sinon';
import app from '../../app';
import Content from '../../database/models/Content';
import History from '../../database/models/History';
import { contentsArray, singleContent, contentsByNameArray, newContentToPost, invalidNewContentToPost, contentToUpdate, updatedMessage, deletedMessage } from '../mocks/Content.mock';
import { historyById, historyOfIntert } from '../mocks/History.mock';
