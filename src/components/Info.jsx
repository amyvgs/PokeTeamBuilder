export default function InfoButton(props) {
  return (
    <div
      onClick={() => props.setIsToggled(false)}
      className="fixed flex justify-center items-center w-full h-full bg-black/60 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col text-white justify-start items-center w-1/2 h-3/4 overflow-y-auto bg-gray-700 p-7"
      >
        <h1 className="text-4xl font-PixelSans mb-5 font-bold">How To Use</h1>
        <p className="mb-8">
          Down below are instructions on how to use and interpret sections of
          this web application.
        </p>

        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-PixelSans text-purple-500 underline">
            Team Builder
          </h1>
          <div className="text-center w-full">
            <p>
              The Pokemon Team Builder offers different ways for you to search
              pokemon, you may directly search using their name in input section
              or you may use advanced search to lookup based on certain
              characteristics.
            </p>
            <p>
              When you're satisfied with your created team, you may provide it a
              name and store it for future reference and to use other features.
            </p>
            <p className="mb-5">
              Just a heads up, you must supply a valid name and you cannot store
              more than 6 teams.
            </p>

            <h1 className="font-PixelSans text-2xl text-purple-300">
              Criteria
            </h1>
            <p className="mb-5">
              The Pokemon Team Builder offers a different perspective on type
              advantages and disadvantages. Instead of using type multipliers,
              this system uses fixed values to provide a more intuitive and
              balanced evaluation. Multipliers can feel a bit misleading when
              analyzing an entire team whereas fixed values offer a clear view
              of overall strengths and weaknesses.
            </p>
            <div className="grid grid-cols-3 gap-5 mb-5">
              <div className="flex flex-col item-center justify-center col-span-1 rounded-lg border border-purple-600">
                <p className="font-PixelSans">Double Damage From</p>
              </div>

              <div className="flex flex-col justify-center items-center col-span-2 rounded-lg border border-purple-600 p-2">
                <p>-2x</p>
                <p>
                  Indicates a large defensive weakness. Deducts 2 from the
                  corresponding type score to emphaisize its impact
                </p>
              </div>

              <div className="flex flex-col item-center justify-center col-span-1 rounded-lg border border-purple-600">
                <p className="font-PixelSans">Half Damage From</p>
              </div>

              <div className="flex flex-col justify-center items-center col-span-2 rounded-lg border border-purple-600 p-2">
                <p>+1.5x</p>
                <p>
                  Half damage from a type increases the score by +1.5,
                  reflecting its importance in balancing weaknesses. This value
                  gives resistance more weight to create a clearer picture of
                  your team's overall weakness.
                </p>
              </div>

              <div className="flex flex-col item-center justify-center col-span-1 rounded-lg border border-purple-600">
                <p className="font-PixelSans">No Damage From</p>
              </div>

              <div className="flex flex-col justify-center items-center col-span-2 rounded-lg border border-purple-600 p-2">
                <p>+3x</p>
                <p>
                  Pokemon that are immune to a certain type cannot be damaged by
                  any moves of that type.
                </p>
              </div>
            </div>

            <p className="text-2xl font-PixelSans text-purple-300">
              How To Read Type Chart
            </p>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col item-center justify-center col-span-1 rounded-lg border border-purple-600">
                <p className="text-green-500 font-PixelSans">Postive Values</p>
              </div>

              <div className="flex flex-col justify-center items-center col-span-2 rounded-lg border border-purple-600 p-2">
                <p>
                  Positive Values indicate areas of strength - your team is
                  well-prepared against these types.
                </p>
              </div>

              <div className="flex flex-col item-center justify-center col-span-1 rounded-lg border border-purple-600">
                <p className="text-red-500 font-PixelSans">Negative Values</p>
              </div>

              <div className="flex flex-col justify-center items-center col-span-2 rounded-lg border border-purple-600 p-2">
                <p>
                  Negative values indicate vulnerabilities - consider replacing
                  or adding pokemon to cover these weaknesses
                </p>
              </div>

              <div className="flex flex-col item-center justify-center col-span-1 rounded-lg border border-purple-600">
                <p className="font-PixelSans">Neutral</p>
              </div>

              <div className="flex flex-col justify-center items-center col-span-2 rounded-lg border border-purple-600 p-2">
                <p>
                  A score of 0 indicates that your team is neutral towards a
                  type, it is neither strong nor weak against it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-PixelSans text-purple-500 underline">
            View/Edit Stored Teams
          </h1>
          <p>
            All stored teams can be viewed within the "My Teams section". All
            youre teams will be displayed here, you may delete, view, or edit
            your stored teams. You may remove and add new pokemon and/or change
            a team name. When you're satisfied with your changes, just click the
            "update team" button below.
          </p>
        </div>

        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-PixelSans text-purple-500 underline">
            Team Comparison
          </h1>

          <p>
            In this section, you may compare your stored teams to have a better
            understanding of their strengths and weaknesses comparatively. The
            left side of the black bar is for the leftmost team and the
            rightside is for the rightmost team. The longer the bar indicates
            that a particular type has a stronger impact on a team. A red bar
            indicates a negative relationship, meaning a team has a weakness to
            that particular type. A green bar indicates that a team is overall
            strong against a particular type.
          </p>
          <p>
            You may also hover over the bars on either side to see a numerical
            representation.
          </p>
        </div>
      </div>
    </div>
  );
}
