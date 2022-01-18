import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("games")
class Games {
 @PrimaryColumn()
 readonly id: string;

 @Column()
 name: string;

 @Column()
 site: string;

 @Column()
 twitter: string;

 @Column()
 telegram: string;

 @Column()
 discord: string;

 @Column()
 rede: string;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;

 constructor() {
  if(!this.id) {
   this.id = uuid();
  }
 }
}


export { Games }


// Entity <> ORM <> DB
// Have a table, the ORM will see which entity is pointing to DB
//Have a request, the ORM will see from which table the entity is pointing

// By pattern the property get a name down then, but if have a parameter will use it
