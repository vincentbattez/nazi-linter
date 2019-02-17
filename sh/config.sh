#!/bin/sh

# Colors
badTxt="\e[91m"
goodTxt="\e[92m"
actionTxt="\e[96m"
infoTxt="\e[95m"
endColor="\e[39m"

# Fonts
bold=$(tput bold)
normal=$(tput sgr0)

# 
# @props color
# @props step
# @props commitMessage
# 
message() {
  colorType=$1
  gitStep=$2
  commitMessage=$3
  symbol=""
  color=$endColor
  
  if [[ $gitStep != '' ]];
  then
    gitStep="[$gitStep] "
  fi

  if [[ $colorType == 'fail' ]];
  then
    symbol="✖ "
    color=$badTxt
  elif [[ $colorType == 'success' ]];
  then
    symbol="✓ "
    color=$goodTxt
  else
    color=$colorType
  fi
  
  printf "${bold}${color}${symbol}${gitStep}${commitMessage}${endColor}\n";
}