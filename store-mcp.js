import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
const server = new McpServer({
    name: "Store Service",
    version: "1.0.0",
});
server.tool("countProducts", {}, async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return {
            content: [
                {
                    type: "text",
                    text: `Total number of products: ${products.length}`,
                },
            ],
        };
    }
    catch (error) {
        return {
            content: [
                {
                    type: "text",
                    text: "Error fetching products count",
                },
            ],
        };
    }
});
server.tool("listNames", {}, async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        const productNames = products.map((product) => product.title).join('\n');
        return {
            content: [
                {
                    type: "text",
                    text: `Product Names:\n${productNames}`,
                },
            ],
        };
    }
    catch (error) {
        return {
            content: [
                {
                    type: "text",
                    text: "Error fetching product names",
                },
            ],
        };
    }
});
const transport = new StdioServerTransport();
await server.connect(transport);
