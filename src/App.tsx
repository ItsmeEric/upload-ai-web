import { Github } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { FileVideo } from "lucide-react";
import { Label } from "./components/ui/label";
import { Upload } from "lucide-react";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "./components/ui/select";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Made with 💜 by Upload.ai</span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github</Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Include the prompt for the AI..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="AI generated results..." readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Remember: you can use the <code className="text-violet-400">{'{transcription}'}</code> variable on your prompt to add the transcription content of the selected video.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Select the video
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Transcription Prompt</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Include keywords mentioned in the video, separated by commas (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Upload video
              <Upload className="w-4 h-4 ml-2" />
            </Button>

          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Model</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">
                    GPT 3.5-turbo 16k
                  </SelectItem>
                </SelectContent>
              </Select>

              <span className="block text-xs text-muted-foreground italic">
                You will be able to customize this soon
              </span>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Temperature</Label>

              <span className="block text-xs text-muted-foreground italic">
                Higher value tend to give more creative results but it gives a lot of wrong results too.
              </span>
            </div>

          </form>

        </aside>
      </main>
    </div >
  )
}
