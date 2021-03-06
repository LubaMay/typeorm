import {PrimaryGeneratedColumn, Column, Entity, ManyToMany} from "../../../src/index";
import {Post} from "./Post";

@Entity("sample4_post_information")
export class PostInformation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
    
    @ManyToMany(type => Post, post => post.informations, {
        cascadeUpdate: true,
    })
    posts: Post[];

}