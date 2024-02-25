# -*- coding: UTF-8 -*-
import time
import datetime
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import os
ROOT=os.path.abspath(os.path.dirname(__file__))


class Watcher:
    DIRECTORY_TO_WATCH = os.path.join(ROOT,"lib")

    def __init__(self):
        self.observer = Observer()

    def run(self):
        event_handler = Handler()
        self.observer.schedule(event_handler, self.DIRECTORY_TO_WATCH, recursive=True)
        self.observer.start()
        try:
            while True:
                time.sleep(5)
        except:
            self.observer.stop()
            print("Error")

        self.observer.join()


class Handler(FileSystemEventHandler):

    @staticmethod
    def on_any_event(event):
        cmd="typedoc --tsconfig tsconfig.prod.json"
        if event.is_directory:
            return None

        elif event.event_type == 'created':
            # Take any action here when a file is first created.
            # print("Received created event - %s." % event.src_path)
            print("create new file :",datetime.datetime.now())
            os.system(cmd)

        elif event.event_type == 'modified':
            # Taken any action here when a file is modified.
            # print("Received modified event - %s." % event.src_path)
            print("modify a file : ",datetime.datetime.now())
            os.system(cmd)


if __name__ == '__main__':
    w = Watcher()
    w.run()