import { Notice } from "@/components/Notice";
import { Tile } from "@/components/Tile";
import { env } from "@/env";
import { useRouteContext } from "@tanstack/react-router";

export function BirdStatusHeader() {
  const { getText, t } = useRouteContext({ from: "/" });
  return (
    <Tile className="h-full p-6">
      <div className="space-y-4 break-words">
        <h1 className="font-bold">
          {getText(t.common.header.headerTitle)}
          <a
            href={env.VITE_BIRD_STATUS_URL}
            className="inline-flex text-emerald-300 underline decoration-emerald-300/50 underline-offset-2 transition-colors duration-200 hover:text-emerald-200 hover:decoration-emerald-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bird Banding Lab database
            <svg
              className="ml-1 h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </h1>
        <Notice>
          {getText(t.common.header.featherSamplingsAndCloacalSwabsNotice)}
        </Notice>
        <div className="flex justify-center gap-2 text-sm">
          <span className="text-gray-300">
            {getText(t.common.header.madeBy)}
          </span>
          <span className="text-gray-500">•</span>
          <a
            href={env.VITE_SOURCE_CODE_URL}
            className="inline-flex items-center font-medium text-emerald-300 underline decoration-emerald-300/50 underline-offset-2 transition-colors duration-200 hover:text-emerald-200 hover:decoration-emerald-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getText(t.common.header.sourceCode)}
            <svg
              className="ml-1 h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </Tile>
  );
}
