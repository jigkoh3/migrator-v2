import { Injectable } from '@nestjs/common';
import * as csv from 'csvtojson';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const csvFilePath = './BKK/Cisco/arp_table_bkk.csv'
    // csv()
    //   .fromFile(csvFilePath)
    //   .then((jsonObj) => {
    //     console.log(jsonObj);
    //     /**
    //      * [
    //      * 	{a:"1", b:"2", c:"3"},
    //      * 	{a:"4", b:"5". c:"6"}
    //      * ]
    //      */
    //      return jsonObj;
    //   })

    return await csv().fromFile(csvFilePath);
  }
}
