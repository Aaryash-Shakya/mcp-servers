import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const server = new McpServer({
    name: "Weather Service",
    version: "1.0.0",
});
server.tool("getWeather", { city: z.string() }, async ({ city }) => {
    return {
        content: [
            {
                type: "text",
                text: `The weather in ${city} is sunny!`,
            },
        ],
    };
});
server.tool("getTemperature", { city: z.string() }, async ({ city }) => {
    return {
        content: [
            {
                type: "text",
                text: `The temperature in ${city} is 25 C!`,
            },
        ],
    };
});
server.tool("rainTomorrow", { city: z.string() }, async ({ city }) => {
    return {
        content: [
            {
                type: "text",
                text: `It will rain tomorrow in ${city}`,
            },
        ],
    };
});
const transport = new StdioServerTransport();
await server.connect(transport);
