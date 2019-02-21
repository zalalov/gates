from tornado import iostream, web, gen
import config
import os
import json


class DashboardHandler(web.RequestHandler):
    async def get(self):
        print(os.getcwd())

        if os.path.exists(config.DASHBOARD_INFO_PATH):
            with open(config.DASHBOARD_INFO_PATH, 'r') as f:
                # In case if file is big enough - do not block
                # the server and do not eat to much RAM
                while True:
                    chunk = f.read(config.FILE_CHUNK_SIZE)
                    if not chunk:
                        break
                    try:
                        self.write(chunk) # write the cunk to response
                        await self.flush() # flush the current chunk to socket
                    except iostream.StreamClosedError:
                        # this means the client has closed the connection
                        # so break the loop
                        break
                    finally:
                        # deleting the chunk is very important because
                        # if many clients are downloading files at the
                        # same time, the chunks in memory will keep
                        # increasing and will eat up the RAM
                        del chunk
                        # pause the coroutine so other handlers can run
                        await gen.sleep(0.000000001) # 1 nanosecond
        else:
            self.set_status(404)
            self.write(json.dumps({
                'error': 'Dashboard info not found.'
            }))
