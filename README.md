# Build
1. Install dependencies
    ```bash
    yarn install
    ```
  
2. Build the project
    ```bash
    yarn build
    ```
    
3. You will find the corresponding **.js** files in the root directory.
    For each filename.ts a corresponding filename.js will be generated in the root directory.

---

# Usage example

1. For each .js file, use chmod +x to make it executable.

2. Then copy the path to the executable file to the MCP configuration file.
  ```json
  {
  	"mcpServers": {
  		"weather": {
  			"command": "npx",
  			"args": ["-y", "node", "/home/aaryash-f/Documents/mcp/weather-mcp.js"]
  		},
  		"store": {
  			"command": "npx",
  			"args": ["-y", "node", "/home/aaryash-f/Documents/mcp/store-mcp.js"]
  		}
  	}
  }
  ```
