import { Command } from "../Command";
import { Client, Message } from "discord.js";

const bye = (client: Client, message: Message, args: string[]): Promise<Message> => {
    return message.channel.send("Bye!");
}
const command = new Command("bye", ["goodbye"], bye);

export default command;