import { Command } from "../Command";
import { Client, Message } from "discord.js";

const gretting = (client: Client, message: Message, args: string[]): Promise<Message> => {
    return message.channel.send("Hello!");
}
const command = new Command("hello", ["gretting"], gretting);

export default command;